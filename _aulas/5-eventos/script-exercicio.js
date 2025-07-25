// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInterno = document.querySelectorAll('a[href^="#"]');
// linksInterno.forEach((link) => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();
//     link.classList.add('ativo');
//     linksInterno.forEach(link => {
//       if (link !== event.target)
//         link.classList.remove('ativo');
//     });
//   });
// });

function handleLink(event) {
  event.preventDefault();
  linksInterno.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

linksInterno.forEach((link) => {
  link.addEventListener('click', handleLink);
});



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const elementos = document.querySelectorAll('body *');
// elementos.forEach(elemento => {
//   elemento.addEventListener('click', (event) => {
//     // console.log(event.currentTarget);
//   });
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// elementos.forEach(elemento => {
//   elemento.addEventListener('click', (event) => {
//     console.log(event.target.remove());
//   });
// });


// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const texto = document.querySelector('html')
texto.addEventListener('keydown', (event) => {
  if (event.key === 't')
    texto.style.fontSize = '120%';
});
