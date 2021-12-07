import { valida } from './validacao.js'
import {enviaEmail} from './envioEmail.js'
// import { FlipDown } from './node_modules/flipdown/src/flipdown.js'


document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 7) + 1;
  
    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow, {
        headings: ["Dias", "Horas", "Minutos", "Segundos"],
      })
  
      // Start the countdown
      .start()
  
      // Do something when the countdown ends
      .ifEnded(() => {
        console.log('The countdown has ended!');
      });
});

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    if(input.dataset.tipo === 'preco') {
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }

    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})


const novaTarefa = document.getElementById("enviarEmail")

novaTarefa.addEventListener('click', enviaEmail('Cliquei!!!!'))

// document.getElementById("enviarEmail").onclick = enviaEmail("CLIQUEI")

// function criarPopup(){
//     newWindow = window.open ('', 'pagina');
// window.open("cadastro_concluido.html", "", "top=40, left=40, width=250, height=100" );
//     newWindow.document.write ("Este é um novo popup <br/> <img src='imagem.jpg' width='100' height='100'>");
// }

// const novaTarefa = document.querySelector('[data-botao]')
// novaTarefa.addEventListener('click',criarPopup())