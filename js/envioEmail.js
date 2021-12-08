// import '../node_modules/nodemailer'

//  const EnviaEmail = () => {
  
//     const botaoConclui = document.getElementById('enviarEmail')
    
//     // botaoConclui.classList.add('check-button')
//     // botaoConclui.innerText = 'concluir'

//     botaoConclui.addEventListener('click', montaEmail)
// }

export const montaEmail = (evento) => {
    console.log('Entrou no montaEmail');
    const nodemailer = require(['nodemailer']);
    console.log(nodemailer);

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

export function abreJanela(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
} 