
const input1=document.querySelector("#num1")
const input2=document.querySelector("#num2")
const btn = document.querySelector("#btnCalcular")
const presult= document.querySelector("#result")
//escuchador de eventos que cada vez que sucedan cambios
//enviar dos eventos(evento a escuchar, funcion - sin parentesis tenidendo los eventos de la funcion)
//lal funcion no lleva parentesis para que no se ejecute una segunda vez
btn.addEventListener('click',btnclick);



function btnclick(){

  let valores= parseInt(input1.value) + parseInt(input2.value) //los guarda como string
  presult.innerText= 'Resultado: '+valores;
  console.log(valores)
}