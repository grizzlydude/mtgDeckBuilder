const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY
    })
);


module.exports = {
    sendMail: (req, res) => {
        transport.sendMail({
            from: req.body.from,
            to: process.env.EMAILADDRESS,
            subject: req.body.subject,
            html: req.boy.html
        });
    }
}