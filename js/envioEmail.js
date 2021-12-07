export function enviaEmail(input) {

    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "sleducar914@gmail.com",
            pass: "Fortal123"
        }
    });

    transporter.sendMail({
        from: "sleducar914@gmail.com",
        to: "tainankhalil@gmail.com",
        // bcc: "tainankhalil@gmail.com",
        subject: "Teste!",
        text: "",
        html: `<p>${input}!</p>`
        // attachments: { path: '/' }
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.log(err);
    })
}