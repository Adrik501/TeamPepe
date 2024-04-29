const nodemailer = require('nodemailer');

// Configure your SMTP transporter
const transporter = nodemailer.createTransport({
    host: 'server_addr', // Replace with your mail server address
    port: server_port,   // Typically 465 for SSL
    secure: true,        // True for 465, false for other ports
    auth: {
        user: 'sender_email', // Replace with your sender email address
        pass: 'password'      // Replace with your email account password
    }
});

//TODO