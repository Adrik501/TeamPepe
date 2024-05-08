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

function tmp_mail(temstr) {
    var subject = "DRINGEND: Warnung - Überhitzung des Serverraums";
    var text = `Sehr geehrtes Team,
  Die aktuellen Serverraumdaten zeigen eine Temperatur von ${temstr}°C, während der empfohlene Grenzwert 22°C beträgt.
  Dies deutet auf eine kritische Situation hin, die unverzüglich behoben werden muss, um mögliche Ausfälle oder Schäden zu verhindern.`;
    var html = `<html>
    <body>
      <p>Sehr geehrtes Team,<br>
        Die aktuellen Serverraumdaten zeigen eine Temperatur von <span style="font-weight:bold">${temstr}°C</span> während der empfohlene Grenzwert 22°C beträgt.<br>
        Dies deutet auf eine kritische Situation hin, die unverzüglich behoben werden muss, um mögliche Ausfälle oder Schäden zu verhindern.
      </p>
    </body>
  </html>`;
    sendMail(subject, text, html);
}

function hum_mail(humstr) {
    // ... similar to tmp_mail, update subject, text and html accordingly
}

function mot_mail() {
    // ... similar to tmp_mail, update subject, text and html accordingly
}