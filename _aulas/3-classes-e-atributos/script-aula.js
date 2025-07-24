/**
 * Classes e Atributos
 * */

// Classlist

const menu = document.querySelector('.menu');
menu.className;
menu.classList.add('ativo');
menu.classList.add('inativo', 'mobile');
menu.classList.remove('inativo');
menu.classList.toggle('inativo');
const contains = menu.classList.contains('intivo');
menu.classList.replace('mobile', 'desktop');
// console.log(menu.classList);
// console.log(contains);

// Attributes

const animais = document.querySelector('.animais')
// console.log(animais.attributes);
// console.log(animais.attributes[0]);

// GetAttibutes e SetAttributes

const img = document.querySelector('img');
img.getAttribute('src');
img.setAttribute('alt', 'Texto alternativo');
const containsAttributes = img.hasAttribute('id');
img.removeAttribute('alt');
console.log(containsAttributes);

// Read Only vs Writable
animais.className;
// animais.className = 'animaisteste';
animais.className += ' vermelho'; // Writable
animais.attributes = 'src="/ativo"'; // Read Only

console.log(animais);
