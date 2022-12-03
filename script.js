
const input1=document.querySelector("#num1")
const input2=document.querySelector("#num2")
const btn = document.querySelector("#btnCalcular")
const presult= document.querySelector("#result")
const form=document.querySelector("#formulario")
//escuchador de eventos que cada vez que sucedan cambios
//enviar dos eventos(evento a escuchar, funcion - sin parentesis tenidendo los eventos de la funcion)
//lal funcion no lleva parentesis para que no se ejecute una segunda vez
form.addEventListener('click',sumaclick);



function sumaclick(event){
  console.log({event})
  event.preventDefault()//no se recargue la pagina
  let valores= parseInt(input1.value) + parseInt(input2.value) //los guarda como string
  presult.innerText= 'Resultado: '+valores;
  console.log(valores)
}