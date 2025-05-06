import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about_container_about_pg">
      <header className="header_section_about_pg">
        <h1 className="title_about_pg">About Us</h1>
        <p className="subtitle_about_pg">
          Bridging Healthcare and AI for Smarter Diabetic Foot Ulcer Management
        </p>
      </header>

      <section className="about_highlight_section_about_pg">
        <div className="highlight_card_about_pg">
          <h2 className="heading_about_pg">What We Do</h2>
          <p className="text_about_pg">
            We leverage state-of-the-art deep learning models to automate the detection, grading, and
            treatment recommendation process for diabetic foot ulcers (DFUs), ensuring patients receive
            timely and personalized care.
          </p>
        </div>
        <div className="highlight_card_about_pg">
          <h2 className="heading_about_pg">Why It Matters</h2>
          <p className="text_about_pg">
            DFUs are a leading cause of hospitalization and amputation in diabetic patients. Our system
            supports healthcare professionals with explainable AI tools to enhance diagnosis accuracy and
            optimize treatment decisions.
          </p>
        </div>
      </section>

      <section className="vision_mission_section_about_pg">
        <div className="card_about_pg">
          <h2 className="heading_about_pg">Our Vision</h2>
          <p className="text_about_pg">
            To be a pioneer in medical AI, transforming diabetic foot care through accessible, scalable, and intelligent diagnostic systems.
          </p>
        </div>
        <div className="card_about_pg">
          <h2 className="heading_about_pg">Our Mission</h2>
          <p className="text_about_pg">
            To empower clinicians with AI-enhanced diagnostic insights and support tools that drive better health outcomes for diabetic patients worldwide.
          </p>
        </div>
      </section>

      <section className="tech_stack_section_about_pg">
        <h2 className="heading_about_pg">Technology Stack</h2>
        <ul className="tech_list_about_pg">
          <li>Frontend: React.js + Tailwind CSS / Custom Styling</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MongoDB</li>
          <li>AI Models: ConvNeXt, YOLOv11-seg</li>
          <li>Similarity Search: KNN with Cosine Similarity</li>
          <li>Deployment: Dockerized + Web Interface</li>
        </ul>
      </section>
    </div>
  );
};

export default About;