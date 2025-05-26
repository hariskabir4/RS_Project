import React, { useState } from 'react';
import './Upload_upload.css';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [uploading, setUploading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    setUploading(true);
    setResponseMessage('');

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/reports/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMessage('Report generated successfully!');
        setTimeout(() => {
          navigate('/veiw-reports');
        }, 1500);
      } else {
        setResponseMessage(data.message || 'Upload failed. Please try again.');
      }
    } catch (error) {
      setResponseMessage('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="uploadContainer_upload">
      <h2 className="title_upload">Upload Foot Ulcer Image</h2>
      
      <div className="uploadBox_upload">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange}
          className="fileInput_upload" 
        />
        
        {previewURL && (
          <div className="preview_upload">
            <img src={previewURL} alt="Preview" />
          </div>
        )}

        <button
          className="uploadBtn_upload"
          onClick={handleUpload}
          disabled={!image || uploading}
        >
          {uploading ? 'Uploading...' : 'Generate Report'}
        </button>

        {responseMessage && (
          <p className={`response_upload ${responseMessage.includes('success') ? 'success' : 'error'}`}>
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Upload;