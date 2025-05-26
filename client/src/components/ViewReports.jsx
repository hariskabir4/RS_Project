import React, { useState, useEffect } from 'react';
import './ViewReports_viewreports.css';
import { useNavigate } from 'react-router-dom';

const ViewReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/reports/reports', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          if (response.status === 401) {
            navigate('/login');
            return;
          }
          throw new Error('Failed to fetch reports');
        }
        const data = await response.json();
        setReports(data);
      } catch (err) {
        setError('Failed to load reports. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, [navigate]);

  const handleDownload = async (reportId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/reports/download/${reportId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to download report');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `report-${reportId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError('Failed to download report. Please try again.');
    }
  };

  if (loading) {
    return <div className="loading_viewreports">Loading reports...</div>;
  }

  if (error) {
    return <div className="error_viewreports">{error}</div>;
  }

  return (
    <div className="reportContainer_viewreports">
      <h1 className="title_viewreports">Previous Treatment Reports</h1>
      {reports.length === 0 ? (
        <p className="noReports_viewreports">No reports found. Upload an image to generate your first report.</p>
      ) : (
        <div className="reportList_viewreports">
          {reports.map((report) => (
            <div key={report._id} className="reportCard_viewreports">
              <img
                src={`http://localhost:5000/${report.imageUrl.replace(/\\/g, '/')}`}
                alt="Ulcer Preview"
                className="reportImage_viewreports"
              />
              <div className="reportDetails_viewreports">
                <h3>Date: {new Date(report.date).toLocaleDateString()}</h3>
                <p><strong>Wagner Grade:</strong> {report.wagnerGrade === -1 ? 'N/A' : report.wagnerGrade}</p>
                <p>{report.summary}</p>
                <button
                  onClick={() => handleDownload(report._id)}
                  className="downloadBtn_viewreports"
                >
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewReports;
