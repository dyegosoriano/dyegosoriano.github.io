// Script que adiciona edeito da "Maquina de Escrever"

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

// Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
// function typeWriter(elemento) {
//   const textoArray = elemento.innerHTML.split('');
//   elemento.innerHTML = '';
//   for(let i = 0; i < textoArray.length; i++) {
//     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
//   }
// }

const titulo = document.querySelector('.typeWriter');
typeWriter(titulo);

// Código a ser adicionado no arquivo .CSS

// h1::after {
//   content: '|';
//   opacity: 1;
//   margin-left: 5px;
//   display: inline-block;
//   animation: blink .7s infinite;
// }
//
// @keyframes blink {
//   0%, 100% {
//     opacity: 1;
//   }
//   50% {
//     opacity: 0;
//   }
// }
