var nodemailer = require('nodemailer/lib/nodemailer');

var transport = nodemailer.createTransport({
    host: 'server_addr',
    port: 'server_port',
    auth: {
        user: 'sender_email',
        pass: 'password'
    }
});

function sendMail(subject, textBody, htmlBody) {
    var message = {
        from: 'sender_email',
        to: 'receiver_email',
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

var a = "10";
var subject = "TMP. ist über " + a + " °C";
var text = `Hallo,
Bitte Beachte das die Temperatur im Serverraum ${a} °C überschreitet
Wenn möglich, kühle den Serverraum auf unter 20 °C ab.`;
var html = `
<html>
  <body>
    <p>Hallo,<br>
       Bitte Beachte das die Temperatur im Serverraum <span style="font-weight:bold">${a} °C</span> überschreitet. <br>
       Wenn möglich, kühle den Serverraum auf unter 20 °C ab.
    </p>
  </body>
</html>`;
sendMail(subject, text, html);