import React from "react";
import Header from "../components/header";

const OurMission = () => {
  return (
    <>
    <Header />
    <section className="mission-section">
      <div className="mission-container">
        <header className="mission-header">
          <h2>Our Mission</h2>
          <p>
            Delivering trusted, accessible, and technology‑driven healthcare
            solutions that put patients first.
          </p>
        </header>

        <div className="mission-content">
          <div className="mission-text">
            <p>
              Our mission is to transform healthcare delivery by leveraging
              modern digital technologies to ensure quality care, transparency,
              and efficiency at every stage of the patient journey. We aim to
              bridge the gap between patients and healthcare providers through a
              secure, reliable, and user‑friendly platform.
            </p>

            <p>
              By focusing on innovation, data integrity, and patient‑centric
              design, our healthcare project empowers hospitals, doctors, and
              patients to make informed decisions, reduce operational
              complexity, and improve overall health outcomes.
            </p>

            <ul className="mission-points">
              <li>✔ Improve access to quality healthcare services</li>
              <li>✔ Ensure secure and transparent medical data management</li>
              <li>✔ Enhance communication between patients and providers</li>
              <li>✔ Support faster, smarter, and reliable clinical decisions</li>
            </ul>
          </div>

          <div className="mission-visual">
            <div className="stat-card">
              <h3>Patient First</h3>
              <p>Every feature is designed with patient care and safety in mind.</p>
            </div>
            <div className="stat-card">
              <h3>Digital Trust</h3>
              <p>Secure systems that protect sensitive health information.</p>
            </div>
            <div className="stat-card">
              <h3>Smart Care</h3>
              <p>Technology that simplifies workflows and improves outcomes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Internal CSS for Premium Look */}
      <style>{`
        .mission-section {
          background: linear-gradient(135deg, #f7fafd, #eef3f9);
          padding: 80px 20px;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          margineop : 100px;
        }

        .mission-container {
          max-width: 1200px;
          margin: 0 auto;
        
        }

        .mission-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .mission-header h2 {
          font-size: 36px;
          font-weight: 700;
          color: #1f2d3d;
          margin-bottom: 12px;
        }

        .mission-header p {
          font-size: 16px;
          color: #5f6f81;
          max-width: 700px;
          margin: 0 auto;
        }

        .mission-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }

        .mission-text p {
          font-size: 15.5px;
          line-height: 1.8;
          color: #3a4a5b;
          margin-bottom: 18px;
        }

        .mission-points {
          list-style: none;
          padding: 0;
          margin-top: 20px;
        }

        .mission-points li {
          font-size: 15px;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .mission-visual {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .stat-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 22px 24px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
        }

        .stat-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: #0b5ed7;
          margin-bottom: 8px;
        }

        .stat-card p {
          font-size: 14.5px;
          color: #556677;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .mission-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
    </>
  );
};

export default OurMission;
