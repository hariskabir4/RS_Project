import React, { useState } from 'react';
import './Upload_upload.css';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [uploading, setUploading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

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
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setResponseMessage(data.message || 'Report generated successfully!');
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
        <input type="file" accept="image/*" onChange={handleImageChange} />
        
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

        {responseMessage && <p className="response_upload">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default Upload;