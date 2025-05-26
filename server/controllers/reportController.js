const Report = require('../models/Report');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const pdfParse = require('pdf-parse');

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Upload image and generate report
exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    // Prepare form data for FastAPI
    const formData = new FormData();
    formData.append('file', fs.createReadStream(req.file.path));

    // Send image to FastAPI and expect a PDF (binary)
    const predictionResponse = await axios.post(
      'http://127.0.0.1:8000/predict',
      formData,
      {
        headers: formData.getHeaders(),
        responseType: 'arraybuffer',
      }
    );

    // Save PDF file
    const pdfPath = `uploads/${Date.now()}_report.pdf`;
    fs.writeFileSync(pdfPath, predictionResponse.data);

    // Extract Wagner Grade from PDF
    let wagnerGrade = -1;
    try {
      const pdfBuffer = fs.readFileSync(pdfPath);
      const data = await pdfParse(pdfBuffer);
      const match = data.text.match(/Predicted Wagner–Meggitt Classification Grade: (\d+)/);
      if (match) {
        wagnerGrade = parseInt(match[1], 10);
      }
    } catch (err) {
      console.error('Failed to parse PDF for Wagner Grade:', err);
    }

    // Create report in database
    const report = new Report({
      userId: req.userId,
      imageUrl: req.file.path,
      wagnerGrade: wagnerGrade,
      summary: 'See PDF report for details.',
      pdfUrl: pdfPath
    });

    await report.save();

    res.json({
      message: 'Report generated successfully',
      report: {
        id: report._id,
        wagnerGrade: report.wagnerGrade,
        pdfUrl: report.pdfUrl
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error generating report' });
  }
};

// Get all reports for a user
exports.getUserReports = async (req, res) => {
  try {
    const reports = await Report.find({ userId: req.userId })
      .sort({ createdAt: -1 });
    
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reports' });
  }
};

// Download PDF report
exports.downloadReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    
    if (!report || report.userId.toString() !== req.userId.toString()) {
      return res.status(404).json({ message: 'Report not found' });
    }

    res.download(report.pdfUrl);
  } catch (error) {
    res.status(500).json({ message: 'Error downloading report' });
  }
}; 