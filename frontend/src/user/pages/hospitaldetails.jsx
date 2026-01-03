import React, { useEffect } from "react";
import Header from "../components/header";

const HospitalDetails = () => {

  useEffect(()=>{
    document.title = "Hospital Details"
  },[])


   useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, []);

    return (
        <>
            <Header />
            <div style={styles.container}>
                <h1 style={styles.heading}>Hospital Information</h1>

                {/* Hospital Overview Card */}
                <div style={styles.card}>
                    <h2 style={styles.title}>🏥 Hospital Overview</h2>
                    <p style={styles.text}>
                        CityCare Hospital is a multi-specialty medical center providing advanced
                        healthcare services with world-class facilities and skilled doctors.
                    </p>
                </div>

                {/* Departments Card */}
                <div style={styles.card}>
                    <h2 style={styles.title}>🩺 Departments</h2>
                    <ul style={styles.list}>
                        <li>Cardiology</li>
                        <li>Neurology</li>
                        <li>Orthopedics</li>
                        <li>Pediatrics</li>
                        <li>Emergency Services</li>
                    </ul>
                </div>

                {/* Contact Info Card */}
                <div style={styles.card}>
                    <h2 style={styles.title}>📍 Contact Details</h2>
                    <p style={styles.text}>
                        <strong>Address:</strong> 123 Health Avenue, Sunrise City, 560001
                    </p>
                    <p style={styles.text}>
                        <strong>Phone:</strong> +91 98765 43210
                    </p>
                    <p style={styles.text}>
                        <strong>Email:</strong> info@citycarehospital.com
                    </p>
                </div>

                {/* Timings Card */}
                <div style={styles.card}>
                    <h2 style={styles.title}>⏱ Hospital Timings</h2>
                    <p style={styles.text}><strong>Monday – Saturday:</strong> 9:00AM – 8:00PM</p>
                    <p style={styles.text}><strong>Sunday:</strong> Emergency Only</p>
                </div>
            </div>
        </>
    );
};

// INTERNAL CSS
const styles = {
    container: {
        // maxWidth: "900px",
        margin: "70px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",

    },
    heading: {
        textAlign: "center",
        fontSize: "36px",
        marginBottom: "30px",
        color: "#1a237e",
        fontWeight: "700",

    },
    card: {
        background: "white",
        borderRadius: "18px",
        padding: "25px",
        marginBottom: "25px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
        transition: "0.3s",
    },
    title: {
        fontSize: "24px",
        marginBottom: "15px",
        color: "#0d47a1",
        fontWeight: "600",
    },
    text: {
        fontSize: "16px",
        color: "#333",
        lineHeight: "1.6",
    },
    list: {
        margin: 0,
        paddingLeft: "20px",
        fontSize: "16px",
        color: "#333",
        lineHeight: "1.8",
    },
};

export default HospitalDetails;
