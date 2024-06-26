let Nodemailer = require('nodemailer');

function sendAlertMail(alertContext){
    let mailTransporter = Nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'developmentTeamPepe@gmail.com',
                clientId: '*',
                clientSecret: '*',
                refreshToken: '*',
                accessToken: '*'
                // Wäre es nicht javascript, hätte ich dafür eine .env mti Umgebungsvariabeln genutzt.
            }
        }
    );

    let mailDetails = {
        from: 'TeamPepe@gmail.com',
        to: '*',
        subject: 'Server emergency alert',
        text: 'The following sensors have issued an alert: ' + alertContext
    };

    mailTransporter
        .sendMail(mailDetails,
            function (err, data) {
                if (err) {
                    console.log('Error Occurs');
                } else {
                    console.log('Email sent successfully');
                }
            }
        );
}

module.exports = sendAlertMail;
