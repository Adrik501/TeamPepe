var nodemailer = require('nodemailer/lib/nodemailer');

var server_addr = "evp.edv.wiki";
var server_port = "465";
var sender_email = "server@edv.wiki";

// Adjust receiver's email when testing
var receiver_email = "support@kingmobileshop.com";

var password = "EinSicheresPasswortWirdNichtErraten#2204";

var transport = nodemailer.createTransport({
    host: server_addr,
    port: server_port,
    secure: true, // use SSL
    auth: {
        user: sender_email,
        pass: password
    }
});

function sendMail(subject, textBody, htmlBody) {
    var message = {
        from: sender_email,
        to: receiver_email,
        subject: subject,
        text: textBody,
        html: htmlBody
    };

    transport.sendMail(message, function(err, info) {
        if(err) {
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}