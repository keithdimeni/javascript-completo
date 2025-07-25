/**
 * Eventos
 * */

// Eventos

// AddEventListener

const img = document.querySelector('img');
// img.addEventListener('click', function () {
//   console.log('clicou');
// });

function callback() {
  console.log('clicou - function');
}

// img.addEventListener('click', callback);
// img.addEVentListener('click', callback()); // undefined
// img.addEventListener('click', function(){
//   console.log('click - funcao aninima');
// });

// img.addEventListener('click', () => {
//   console.log('click - arrow function');
// });


// Parametro do callback

function callbackComParametro(event){
  console.log(event);
};
// img.addEventListener('click', callbackComParametro);


// Propriedades do Event
const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event){
  const currenttarget = event.currentTarget; // o mesmo que o this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  console.log(currenttarget, this, target, type);
}

// animaisLista.addEventListener('click', executarCallback);


const linkExterno = document.querySelector('a[href^="http"]')

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}
linkExterno.addEventListener('click', clickNoLink);


// Diferentes eventos
const h1 = document.querySelector('h1');
function callbackH1(event) {
  console.log(event.type, event);
}

// h1.addEventListener('click', callbackH1);
// h1.addEventListener('mouseenter', callbackH1);
// window.addEventListener('scroll', callbackH1);
// window.addEventListener('resize', callbackH1);
// window.addEventListener('keydown', callbackH1);

// Keyboard (usar atalhos para adicionar atalhos)

function handleKeyboard(event) {
  if (event.key === 'p')
    document.body.style.backgroundColor = 'purple';
  if (event.key == 'r')
    document.body.style.backgroundColor = 'red';
}

window.addEventListener('keydown', handleKeyboard);


const imgs = document.querySelectorAll('img');


// Foreach e Eventos

imgs.forEach((img) => {
  img.addEventListener('click', (event) => {
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
  });
});