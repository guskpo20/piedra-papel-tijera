let eleccionActiva = document.getElementsByName("elecciones");
let btnSiguiente = document.getElementById('siguiente');
let btnAleatorio = document.getElementById('aleatorio');
let imgMaquina = document.getElementById('eleccionMaquina');
let imgHumano = document.getElementById('eleccionHumano');
let respuesta;
let eleccionHumano = 0;
let eleccionIa = 0;
let resultado = document.getElementById('resultado');








function eleccionRandom(){
    eleccionHumano = Math.floor(Math.random() * (3 - 0)) + 0;
    if(eleccionHumano == 0){
        imgHumano.src="/images/piedra.png";
    }else if(eleccionHumano == 1){
        imgHumano.src="/images/papel.png";
    }else{
        imgHumano.src="/images/tijera.png";
    }
    iaElige()
}


function eleccion(){
    eleccionActiva.forEach(element => {
        if(element.checked){
            respuesta = element.value;
        }
    });
    let src = `/images/${respuesta}.png`;
    imgHumano.src= src;
    if(respuesta == "piedra"){
        eleccionHumano = 0;
    }else if(respuesta == "papel"){
        eleccionHumano = 1;
    }else{
        eleccionHumano = 2;
    }
    console.log(eleccionHumano)
    iaElige()
}

function iaElige(){
    eleccionIa = Math.floor(Math.random() * (3 - 0)) + 0;
    if(eleccionIa == 0){
        imgMaquina.src="/images/piedra.png";
    }else if(eleccionIa == 1){
        imgMaquina.src="/images/papel.png";
    }else{
        imgMaquina.src="/images/tijera.png";
    }
    ganador()
}

function ganador(){
    if(eleccionHumano === eleccionIa){
        resultado.innerHTML = "Empate"
    }else if(eleccionHumano == 0 && eleccionIa == 1){
        resultado.innerHTML = "Perdiste"
    }else if(eleccionHumano == 0 && eleccionIa == 2){
        resultado.innerHTML = "Ganaste"
    }else if(eleccionHumano == 1 && eleccionIa == 2){
        resultado.innerHTML = "Perdiste"
    }else if(eleccionHumano == 1 && eleccionIa == 0){
        resultado.innerHTML = "Ganaste"
    }else if(eleccionHumano == 2 && eleccionIa == 0){
        resultado.innerHTML = "Perdiste"
    }else if(eleccionHumano == 2 && eleccionIa == 1){
        resultado.innerHTML = "Ganaste"
    }

    setTimeout(function(){
        resultado.innerHTML = ""
        imgMaquina.src="/images/pregunta.png"
        imgHumano.src="/images/pregunta.png";
    }, 2000);
}



btnSiguiente.addEventListener("click", eleccion)
btnAleatorio.addEventListener("click", eleccionRandom)




