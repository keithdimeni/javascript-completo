/**
 * Dimensoes e Distancias
 * */

// Height e Width
const section = document.querySelector('.animais');
const clientHeight = section.clientHeight; // heigth + padding
const offSetHeight = section.offsetHeight; // height + padding + border
const scrollHeight = section.scrollHeight; // height total, mesmo dentro do scroll

console.log('Client Height: ' + clientHeight,
  'OffsetHeight: ' + offSetHeight,
  'ScrollHeight: ' + scrollHeight);

const clientWidth = section.clientWidth;
const offSetWidth = section.offsetWidth;
const scrollWidth = section.scrollWidth;

console.log('Client Width: ' + clientWidth,
  'OffsetWidth: ' + offSetWidth,
  'ScrollWidth: ' + scrollWidth);

const offsetTop = section.offsetTop; //distancia entre o topo do elemento e o topo da pagina
console.log('OffsetTop: ' + offsetTop);

// distancia entre o canto esquerdo do elemento
// e o canto esquerdo da pagina
const offsetLeft = section.offsetLeft;
console.log('OffsetLeft: ' + offsetLeft);


// GETBOUNDINGCLIENTRECT

const rect = section.getBoundingClientRect();
console.log(rect);

console.log('height: ' + rect.height);
console.log('width: ' + rect.width);
console.log('top: ' + rect.top); // distancia entre o topo do elemento e o scroll



// Window

window.innerHeight; // width da janela(viewport)
window.outerWidth; // soma devtools tambem
window.innerHeight; // height da janela(viewport)
window.outerHeight; // soma a barra de endereco

window.pageYOffset; // distancia total do scroll vertical e ja nao e usado
window.pageXOffset; // distancia total do scroll horozintal e ja nao e usado

if (window.innerWidth < 600){
  console.log('Tela menor que  600px');
}

// MatchMedia()

const small = window.matchMedia('(max-width: 600px)');
if (small.matches) {
  console.log('Tela menor que 600px');
} else {
  console.log('Tela maior que 600px');
}

