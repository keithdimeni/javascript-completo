
/**
 * forEach e Arrow Function
 * */

//ForEach com funcoes anonimas

const imgs = document.querySelectorAll('img');
imgs.forEach(function (img) {
  // console.log(img);
});

imgs.forEach(function (valorAtual, indice, array) {
  // console.log(valorAtual);
  // console.log(indice);
  // console.log(array);
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (titulo){
  // console.log(titulo);
});


// Arrow Function

imgs.forEach((img) => {
  // console.log(img);
});

// Para parametro unico
imgs.forEach(item => {
  // console.log(item);
});


// Para multiplos parametros
imgs.forEach((item, index) => {
  // console.log(item, index);
});

// sem parametro
let i = 0;
imgs.forEach(() => {
  // console.log(i++);
})


// omissao de {}

imgs.forEach(item => console.log(item));