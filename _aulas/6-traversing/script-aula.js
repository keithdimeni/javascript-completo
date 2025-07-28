/**
 * Traversing e Manipulação
 * */

// OuterHtml, InnerHtml e InnerText



const menu = document.querySelector('.menu');

// console.log(menu.outerHTML); // todo html do elemento
// console.log(menu.innerHTML); // html interno
// console.log(menu.innerText); // texto, sem tags

// menu.innerHTML += '<li>Item 1</li>';
// menu.innerText = '<p>Novo texto</p>';

// Traversing
// Refere-se à navegação através dos elementos do DOM, permtindo acessar elementos relacionados

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; //HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // ultimo filho




 // Element Vs Node

lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child


// Manipulando Elementos
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista); // move a lista para o final do contato
// contato.insertBefore(lista, titulo); // insere a lista antes do titulo
// contato.removeChild(titulo);
// contato.replaceChild(lista, titulo);


// Novo Elementos

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo titulo';
novoH1.classList.add('titulo');
animais.appendChild(novoH1);



// Clonar Elementos
const titulo1 = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo1;
// titulo1, titulo2 e novoTitulo sao o mesmo elemento

const cloneTitulo = titulo1.cloneNode(true);
contato.appendChild(cloneTitulo);
