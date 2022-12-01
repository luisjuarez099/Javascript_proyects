// clase .
// id #
//funciones y metodos para seleccionar
//los elementos que nos permite ejecutar en nuestro html
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)
console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});
// MANIPULACIOND DE JS PARA HTML
h1.innerHTML="Manipulacion js <br> javascript"//moddificamos html el titulo 
h1.innerText="" //Interpreta todo como texto. 

h1.getAttribute="" //leer los atributos de nuestro elementos
h1.setAttribute="" //modificamos la clase

h1.classList.add("Verde")
input.value="Carta de Amor"  //Damos por defecto lo que se muestra en la web 

//cremaos elemento desde cero
const img =document.createElement('img')
//atributos
img.setAttribute('src', 'https://www.pngmart.com/files/13/Akatsuki-PNG-Image.png')

console.log(img)
//insertasmos a un elemento que ya existia
pid.appendChild(img)