import React, { useEffect } from "react";
import "./Contact.css";
import Header from "../components/header";

const Contact = () => {

useEffect(() => {
    document.title = "Contact"
  }, [])


  return (
    <div className="contact ct">
      {/* Hero Section */}
      <Header />
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="h" style={{color:"white"}}>Contact Health Care Hospital</h1>
          <p className="h" style={{color:"white"}}>
            We're here to help — reach out for appointments, emergencies, or any general enquiries.
            Your health and safety are our top priority.
          </p>
        </div>
      </section>

      {/* Contact Overview */}
      <section className="contact-overview">
        <h2>Get in Touch</h2>
        <p>
          Use the form to send us a message, or use the phone and email listed to contact the relevant department directly.
          For emergencies call our 24/7 helpline immediately.
        </p>
      </section>

      {/* Main content: Form + Details */}
      <main className="contact-main">
        {/* Left: Contact Form */}
        <section className="contact-column contact-form" aria-labelledby="contact-form-heading">
          <h3 id="contact-form-heading">Send Us a Message</h3>
          <p className="muted">Fill the form below and our team will respond within 24 hours.</p>

          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              const feedback = e.target.querySelector(".form-feedback");
              if (feedback) feedback.textContent = "Thank you — your message has been received (demo).";
              e.target.reset();
            }}
          >
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" required placeholder="Your full name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+91 12345 67890" />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Reason for contact" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" required placeholder="Write your message..."></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Send Message</button>
              <button type="reset" className="btn btn-ghost">Reset</button>
            </div>

            <div className="form-feedback" role="status" aria-live="polite" />
          </form>
        </section>

        {/* Right: Contact Details */}
        <aside className="contact-column contact-info" aria-labelledby="contact-info-heading">
          <h3 id="contact-info-heading">Contact Details</h3>

          <div className="info-block">
            <h4>Address</h4>
            <p>HealthCare Hospital<br/>123 Health Avenue, Sunrise City, 560001</p>
          </div>

          <div className="info-block">
            <h4>Phone</h4>
            <p><a href="tel:+911234567890" className="plain-link">+91 12345 67890</a> (24/7 Helpline)</p>
          </div>

          <div className="info-block">
            <h4>Email</h4>
            <p><a href="mailto:contact@healthcare.com" className="plain-link">contact@healthcare.com</a></p>
          </div>

          <div className="info-block">
            <h4>Visiting Hours</h4>
            <p>Mon – Sun: 09:00 — 17:00 (Emergency open 24/7)</p>
          </div>

          <div className="map-block" aria-hidden="true">
            <div className="map-placeholder">Map placeholder — replace with iframe/embed</div>
          </div>

          <p className="support-note muted">
            For immediate emergencies call the helpline or go directly to our Emergency Department.
          </p>
        </aside>
      </main>

      {/* Quick Contacts Section */}
      <section className="contact-quick">
        <div className="quick-card">
          <h4>Emergency</h4>
          <p className="quick-number">+91 99999 99999</p>
          <p className="muted">Immediate assistance</p>
        </div>
        <div className="quick-card">
          <h4>Appointments</h4>
          <p className="quick-number">+91 12345 67890</p>
          <p className="muted">Book a visit</p>
        </div>
        <div className="quick-card">
          <h4>Patient Relations</h4>
          <p className="quick-number">patientcare@healthcare.com</p>
          <p className="muted">Queries & feedback</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <p className="foot" style={{color:"white"}}>© 2025 HealthCare Hospital — Compassion | Excellence | Trust</p>
      </footer>
    </div>
  );
};

export default Contact;
