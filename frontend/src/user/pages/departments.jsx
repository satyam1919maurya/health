import React, { useEffect } from "react";
import pic1 from '../../images/car.webp'
import pic2 from '../../images/nur.webp'
import pic3 from '../../images/Orthopedics.webp'
import pic4 from '../../images/Pediatrics.webp'
import pic5 from '../../images/Dermatology.webp'
import pic6 from '../../images/Gynecology.webp'
import Header from "../components/header";

const Departments = () => {
  
  const departments = [
    { name: "Cardiology", desc: "Advanced care for heart and vascular diseases.", img: pic1 },
    { name: "Neurology", desc: "Expert treatment for brain and nervous system disorders.", img: pic2},
    { name: "Orthopedics", desc: "Comprehensive bone, joint, and spine care.", img: pic3 },
    { name: "Pediatrics", desc: "Complete medical care for infants and children.", img: pic4},
    { name: "Dermatology", desc: "Specialized skin, hair, and nail treatments.", img: pic5 },
    { name: "Gynecology", desc: "Women’s reproductive and wellness healthcare.", img: pic6 },
  ];

  useEffect(()=>{
    document.title = "Departments"
  },[])

  return (
    <>
      <Header />

      {/* Internal CSS */}
      <style>{`
        .dept-wrapper {
          max-width: 1200px;
          margin: 50px auto;
          padding: 20px;
          font-family: 'Poppins', sans-serif;
          margin-top: 100px;
        }

        .dept-heading {
          text-align: center;
          font-size: 36px;
          font-weight: 700;
          color: #244c74;
          letter-spacing: 1px;
          margin-bottom: 40px;
          text-transform: uppercase;
        }

        .dept-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .dept-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          padding: 25px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.4);
          box-shadow: 0px 8px 25px rgba(0,0,0,0.08);
          transition: all 0.35s ease;
          text-align: center;
        }

        .dept-card:hover {
          transform: translateY(-7px);
          box-shadow: 0px 15px 35px rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.95);
        }

        .dept-img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 15px;
        }

        .dept-name {
          font-size: 22px;
          font-weight: 600;
          color: #0b4e9b;
          margin-bottom: 8px;
        }

        .dept-desc {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
        }

        /* FOOTER */
        .footer {
          margin-top: 60px;
          background: #0d47a1;
          color: white;
          padding: 30px 20px;
          text-align: center;
          border-radius: 15px;
          font-family: 'Poppins', sans-serif;
        }

        .footer-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .footer-text {
          font-size: 14px;
          opacity: 0.9;
          margin-bottom: 4px;
        }

        .footer-copy {
          margin-top: 12px;
          font-size: 13px;
          opacity: 0.7;
        }

      `}</style>

      {/* UI Section */}
      <div className="dept-wrapper">
        <h2 className="dept-heading">Our Hospital Departments</h2>

        <div className="dept-grid">
          {departments.map((d, i) => (
            <div className="dept-card" key={i}>
              <img src={d.img} alt={d.name} className="dept-img" />

              <div className="dept-name">{d.name}</div>
              <div className="dept-desc">{d.desc}</div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <h3 className="footer-title">Health Care</h3>
          <p className="footer-text">Providing World-Class Healthcare Services</p>
          <p className="footer-copy">© {new Date().getFullYear()} Health Care Hospital | All Rights Reserved</p>
        </footer>

      </div>
    </>
  );
};

export default Departments;
