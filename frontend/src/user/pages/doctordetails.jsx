import React, { useEffect, useState } from "react";
import img1 from "../../images/dc1.webp"
import img2 from "../../images/dc2.webp"
// import img3 from "../../images/dc3.webp"
import Header from "../components/header";

export default function DoctorCardList() {
  const [doctors, setDoctors] = useState([]);
  const image = [img2, img1, img2]

  // get all doctors 
  const getdoctor = async () => {
    const re = await fetch(`${import.meta.env.VITE_API_URL}/doctor`, {
      method: "GET",
      headers: { "content-type": "application/json" },

    })
    const d = await re.json();
    setDoctors(d)
  }

  useEffect(()=>{
    getdoctor()
  },[])

  return (
    
    <>
    <Header />
    <div style={styles.listWrapper}>
      {doctors.map((doctor, index) => (
        <div key={index} style={styles.cardWrapper}>
          <div style={styles.card}>
            <div style={styles.imageSection}>
              <img
                src={image[index]}
                alt={doctor.name}
                style={styles.image}
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/300x300?text=No+Image";
                }}
              />
            </div>

            <div style={styles.content}>
              <h2 style={styles.name}>{doctor.Doctorname}</h2>
              <p style={styles.sub}>{doctor.specialization} • {doctor.qualification}</p>

              <div style={styles.infoBox}>
                <div style={styles.field}><strong>Gender:</strong> {doctor.gender}</div>
                <div style={styles.field}><strong>Phone:</strong> {doctor.phone}</div>
                <div style={styles.field}><strong>Email:</strong> {doctor.email}</div>
                <div style={styles.field}><strong>Hospital:</strong> {doctor.hospitalname}</div>
              </div>

              <div style={styles.tags}>
                <span style={styles.tag}>{doctor.specialization}</span>
                <span style={styles.tag}>{doctor.qualification}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

const styles = {
  listWrapper: {
    width: "100%",
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "30px",
    alignItems: "center",
    padding: "20px",
    marginTop: "70px"
  },
  cardWrapper: {
    // flexGrow:1,
    width: "600px",
    background: "linear-gradient(135deg, #f3f5ff, #ffffff)",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
    // padding: "25px",
  },
  card: {
    display: "flex",
    borderRadius: "16px",
    overflow: "hidden",
    backgroundColor: "white",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },
  imageSection: {
    width: "40%",
    background: "#f2f4f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  image: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  content: {
    width: "60%",
    padding: "25px",
  },
  name: {
    fontSize: "24px",
    margin: 0,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  sub: {
    marginTop: "8px",
    color: "#6a6a6a",
    fontSize: "15px",
  },
  infoBox: {
    // marginTop: "20px",
    padding: "15px",
    background: "#f9fafc",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    boxShadow: "inset 0 0 10px rgba(0,0,0,0.03)",
  },
  field: {
    marginBottom: "10px",
    fontSize: "15px",
    color: "#333",
  },
  tags: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
  },
  tag: {
    padding: "8px 14px",
    background: "#e1e7ff",
    borderRadius: "30px",
    fontSize: "13px",
    fontWeight: "600",
    color: "#3b4cca",
    boxShadow: "0 3px 10px rgba(59,76,202,0.2)",
  },
};