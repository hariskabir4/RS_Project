import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services_container_service_pg">
      <header className="header_section_service_pg">
        <h1 className="title_service_pg">Our Services</h1>
        <p className="subtitle_service_pg">
          Empowering Diabetic Foot Ulcer Treatment with AI-driven Personalization
        </p>
      </header>

      <section className="vision_mission_section_about_pg">
        <div className="card_about_pg">
          <h2 className="heading_about_pg">Our Vision</h2>
          <p className="text_about_pg">
            To revolutionize diabetic foot ulcer care by integrating explainable AI to deliver accurate,
            personalized, and timely treatment recommendations across healthcare systems.
          </p>
        </div>
        <div className="card_about_pg">
          <h2 className="heading_about_pg">Our Mission</h2>
          <p className="text_about_pg">
            We aim to support clinicians with deep learning–powered tools for effective DFU grading,
            visual understanding, and evidence-based treatment guidance using a user-friendly platform.
          </p>
        </div>
      </section>

      <section className="service_features_service_pg">
        <div className="feature_card_service_pg">
          <h3>AI-Powered DFU Analysis</h3>
          <p>
            Upload diabetic foot ulcer images and get instant analysis powered by deep learning (ConvNeXt and YOLOv11-seg).
          </p>
        </div>
        <div className="feature_card_service_pg">
          <h3>Explainable Predictions</h3>
          <p>
            Visualize segmentation heatmaps over ulcers for clear explainability using attention overlays.
          </p>
        </div>
        <div className="feature_card_service_pg">
          <h3>Wagner Grade Mapping</h3>
          <p>
            Automatically classify ulcers into Wagner grades to assist in clinical decision-making.
          </p>
        </div>
        <div className="feature_card_service_pg">
          <h3>Case-Based Retrieval</h3>
          <p>
            Retrieve similar past cases using cosine similarity and KNN-based matching to enhance treatment reliability.
          </p>
        </div>
        <div className="feature_card_service_pg">
          <h3>Interactive Reports</h3>
          <p>
            Generate detailed, downloadable treatment reports from the prediction pipeline.
          </p>
        </div>
        {/* <div className="feature_card_service_pg">
          <h3>Seamless Web Experience</h3>
          <p>
            User-friendly web interface for uploading, reviewing, and downloading personalized results.
          </p>
        </div> */}
      </section>
    </div>
  );
};

export default Services;