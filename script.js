
const input1=document.querySelector("#num1")
const input2=document.querySelector("#num2")
const btn = document.querySelector("#btnCalcular")
const presult= document.querySelector("#result")

function btnclick(){

  let valores= parseInt(input1.value) + parseInt(input2.value) //los guarda como string
  presult.innerText= 'Resultado: '+valores;
  console.log(valores)
}