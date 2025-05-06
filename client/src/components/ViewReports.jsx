import React from 'react';
import './ViewReports_viewreports.css';

const mockReports = [
  {
    id: 1,
    date: '2025-05-01',
    grade: 2,
    summary: 'Aggressive wound care, surgical debridement, antibiotics.',
    image: '/sample-ulcer.png',
  },
  {
    id: 2,
    date: '2025-04-27',
    grade: 4,
    summary: 'Extensive debridement, antibiotics, hospital admission advised.',
    image: '/sample-ulcer2.png',
  },
];

const ViewReports = () => {
  return (
    <div className="reportContainer_viewreports">
      <h1 className="title_viewreports">Previous Treatment Reports</h1>
      <div className="reportList_viewreports">
        {mockReports.map((report) => (
          <div key={report.id} className="reportCard_viewreports">
            <img src={report.image} alt="Ulcer Preview" className="reportImage_viewreports" />
            <div className="reportDetails_viewreports">
              <h3>Date: {report.date}</h3>
              <p><strong>Wagner Grade:</strong> {report.grade}</p>
              <p>{report.summary}</p>
              <a href={`/api/download/${report.id}`} className="downloadBtn_viewreports" download>Download PDF</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewReports;
