import { valida } from './validacao.js'
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

// function criarPopup(){
//     newWindow = window.open ('', 'pagina');
//     newWindow.document.write ("Este é um novo popup <br/> <img src='imagem.jpg' width='100' height='100'>");
// }

// const novaTarefa = document.querySelector('[data-botao]')
// novaTarefa.addEventListener('click',criarPopup())