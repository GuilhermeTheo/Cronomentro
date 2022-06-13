"use strict"
let hora = 0;
let minutos = 0;
let segundos = 0;
let crono;
let milesimos = 100//milesimos em segundos //quanto menor o numero mais rapido sera a contagem
let contador = document.getElementById('contador')
let c = 0
function comecar(){
    
    crono = setInterval(() => {temporizador()},milesimos);
    document.getElementById("comecar").disabled = true

    
}
function pausar(){
     clearInterval(crono);
     document.getElementById("comecar").disabled = false
     
}
function reset(){
    clearInterval(crono)
    contador.innerHTML = "00:00:00";
    hora = 0
    minutos = 0
    segundos = 0
    document.getElementById("comecar").disabled = false    
}
function temporizador(){
    segundos++
      if (segundos == 60){
      segundos = 0
      minutos = minutos + 1
      }if (minutos == 60){
      minutos = 0
      hora = hora + 1
      }

   let hms = hora + ":" + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
   contador.innerHTML = hms
}
