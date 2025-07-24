// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
console.log(img.offsetTop);
// console.log(img.getBoundingClientRect().top);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img');

let somaTotal = 0;
imgs.forEach(img => {
  somaTotal += img.clientWidth;
  console.log(img.clientWidth);
});
console.log('A soma total: ' + somaTotal);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach(link => {
  if (link.offsetWidth < 48)
    console.log(link + ' Largura Menor que 48px');
  if (link.offsetHeight < 48) {
    console.log(link + ' Altura Menor que 48px');
  }

});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
const viewport = window.matchMedia('(max-width: 720px)');
if (viewport.matches){
  menu.classList.add('menu-mobile');
}
