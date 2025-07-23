/**
 * Selecionar Elementos
 * */


// Seleciona pelo Id
const animaisSection = document.getElementById('animais');
const animaisContato = document.getElementById('contato');
// console.log(animaisSection);
// console.log(animaisContato);

// Retorna null
const naoExiste = document.getElementById('teste');
// console.log(naoExiste);

//Class a Tag

// seleciona pela class, retonar HtmlCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');
// console.log(gridSection);
// console.log(gridSection[0]);
// console.log(contato);

//Seleciona pela Tag, retorna HtmlCollection
const ul = document.getElementsByTagName('ul');
// console.log(ul);

//Seletor geral unico
const animais = document.querySelector('.animais');
const contato2 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCss = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

const navIitem = primeiroUl.querySelector('li');
console.log(navIitem);


//Seletor geral lista
const gridSections = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');
console.log(fotosAnimais);
