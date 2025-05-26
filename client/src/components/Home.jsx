import React, { useEffect } from 'react';
import './Home_homepg.css';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
  }, []);

  return (
    <div className="container_homepg">
      <header className="hero_homepg">
        <h1>Revolutionize Diabetic Foot Care</h1>
        <p>AI-powered analysis for faster, personalized, and accurate ulcer treatment.</p>
        <Link to="/upload" className="cta_homepg">Upload Ulcer Image</Link>
      </header>

      <section className="features_homepg">
        <div className="feature_homepg">
          <h2>AI Diagnosis</h2>
          <p>Upload an ulcer image and receive a detailed diagnosis using our deep learning pipeline.</p>
        </div>
        <div className="feature_homepg">
          <h2>Instant Treatment Report</h2>
          <p>Get treatment recommendations based on similar historical cases and Wagner grading.</p>
        </div>
        <div className="feature_homepg">
          <h2>Report History</h2>
          <p>Access previous reports, view summaries, and download PDFs anytime.</p>
        </div>
      </section>

      <section className="mission_homepg">
        <h2>Our Mission</h2>
        <p>To enable proactive diabetic care through explainable and accessible AI diagnostics.</p>

        <h2>Our Vision</h2>
        <p>To reduce amputation risks by providing early, accurate, and personalized ulcer treatment insights worldwide.</p>
      </section>
    </div>
  );
};

export default Home;