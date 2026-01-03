import React, { useEffect } from "react";
import "./abouthome.css";
import Header from "../components/header";
import { Link } from "react-router-dom";

const Abouthome = () => {


  useEffect(() => {
    document.title = "About the hospital"
  }, [])

  return (
    <div className="about">
      {/* Hero Section */}
      <Header />
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Health Care Hospital</h1>
          <p>
            Delivering Excellence in Healthcare with Compassion, Innovation, and Trust.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="about-overview">
        <h2>Who We Are</h2>
        <p>
          Health Care Hospital is a state-of-the-art multi-specialty healthcare center
          offering a full range of medical services. Our mission is to enhance the
          health and well-being of our community through accessible, affordable,
          and advanced medical care.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            To deliver personalized, compassionate, and world-class healthcare services
            to our patients by combining advanced technology with expert medical care.
          </p>
        </div>

          <div className="vision-content">
        <Link to="/ourmission" className="lio">
            <h2>Our Vision</h2>
        </Link>
            <p>
              To be recognized as a leading healthcare provider known for quality, innovation,
              and patient satisfaction across the region.
            </p>
          </div>
      </section>

      {/* Facilities Section */}
      <section className="about-facilities">
        <h2>Our Facilities</h2>
        <ul>
          <li>Modern Operation Theatres with Advanced Equipment</li>
          <li>24/7 Emergency & Trauma Care Unit</li>
          <li>Fully Equipped Diagnostic & Imaging Center</li>
          <li>Specialized Intensive Care Units (ICUs)</li>
          <li>In-House Pharmacy and Laboratory</li>
          <li>Comfortable Patient Wards and Private Rooms</li>
        </ul>
      </section>

      {/* Our Team Section */}
      <section className="about-team">
        <h2>Our Dedicated Team</h2>
        <p>
          Our strength lies in our experienced and dedicated team of doctors, nurses,
          and support staff. Every team member at CityCare Hospital shares a common
          commitment—to provide exceptional patient care.
        </p>
        <div className="team-cards">
          <div className="team-card">
            <h3>Dr. Meena Sharma</h3>
            <p>Chief Cardiologist</p>
          </div>
          <div className="team-card">
            <h3>Dr. Rohan Patel</h3>
            <p>Neurosurgeon</p>
          </div>
          <div className="team-card">
            <h3>Dr. Priya Singh</h3>
            <p>Pediatric Specialist</p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="about-commitment">
        <h2>Our Commitment to Quality</h2>
        <p>
          We adhere to the highest standards of medical ethics and clinical excellence.
          Our hospital is continuously upgrading facilities and training staff to provide
          care that meets international benchmarks.
        </p>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>© 2025 Health Care Hospital | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Abouthome;
