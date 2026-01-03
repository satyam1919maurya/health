// email.js
const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendDoctorWelcomeEmail(toEmail, doctorName, pwd) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

     const mailOptions = {
      from: `"Hospital Admin" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "Welcome to Our Hospital Portal 🎉",
      html: `
        <html>
          <head>
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f4f6f8;
                padding: 0;
                margin: 0;
              }
              .container {
                max-width: 600px;
                margin: 40px auto;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                overflow: hidden;
              }
              .header {
                background: linear-gradient(135deg, #4CAF50, #2E7D32);
                color: white;
                text-align: center;
                padding: 20px 0;
              }
              .header h1 {
                margin: 0;
                font-size: 26px;
              }
              .content {
                padding: 30px;
                color: #333;
              }
              .content h2 {
                color: #4CAF50;
              }
              .password-box {
                background-color: #f1f1f1;
                padding: 15px;
                border-radius: 8px;
                font-size: 18px;
                text-align: center;
                letter-spacing: 1px;
                margin: 20px 0;
                border: 1px solid #ddd;
              }
              .btn {
                display: inline-block;
                padding: 12px 25px;
                background-color: #4CAF50;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
              }
              .footer {
                text-align: center;
                font-size: 12px;
                color: #888;
                padding: 15px;
                border-top: 1px solid #eee;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Welcome to Our Hospital</h1>
              </div>
              <div class="content">
                <h2>Hello Dr. ${doctorName},</h2>
                <p>We’re excited to have you join our hospital team! Your account has been created successfully.</p>
                <p>You can now log in to your doctor dashboard using the credentials below:</p>
                <div class="password-box">
                  <strong>Password:</strong> ${pwd}
                </div>
                <p>
                  <a class="btn" href="${process.env.API_URL}/login" target="_blank">
                    Go to Dashboard
                  </a>
                </p>
                <p>If you did not request this account, please contact the admin immediately.</p>
                <p>Best Regards,<br><strong>Hospital Management Team</strong></p>
              </div>
              <div class="footer">
                &copy; ${new Date().getFullYear()} Our Hospital. All rights reserved.
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully to ${toEmail}`);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
}

module.exports = sendDoctorWelcomeEmail;
