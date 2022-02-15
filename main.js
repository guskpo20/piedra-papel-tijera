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
        imgHumano.src="https://piedra-papel-o-tijera.netlify.app/IMAGENES/piedra.png";
    }else if(eleccionHumano == 1){
        imgHumano.src="https://piedrapapelotijera.uy/wp-content/uploads/2018/03/papel-slide.png";
    }else{
        imgHumano.src="https://piedrapapelotijera.uy/wp-content/uploads/2018/03/tijera-slide.png";
    }
    iaElige()
}


function eleccion(){
    eleccionActiva.forEach(element => {
        if(element.checked){
            respuesta = element.value;
        }
    });
    let src = undefined;
    if(respuesta == "piedra"){
        src = "https://piedra-papel-o-tijera.netlify.app/IMAGENES/piedra.png"
        eleccionHumano = 0;
    }else if(respuesta == "papel"){
        src = "https://piedrapapelotijera.uy/wp-content/uploads/2018/03/papel-slide.png";
        eleccionHumano = 1;
    }else{
        src="https://piedrapapelotijera.uy/wp-content/uploads/2018/03/tijera-slide.png";
        eleccionHumano = 2;
    }
    imgHumano.src= src;
    console.log(eleccionHumano)
    iaElige()
}

function iaElige(){
    eleccionIa = Math.floor(Math.random() * (3 - 0)) + 0;
    if(eleccionIa == 0){
        imgMaquina.src="https://piedra-papel-o-tijera.netlify.app/IMAGENES/piedra.png";
    }else if(eleccionIa == 1){
        imgMaquina.src="https://piedrapapelotijera.uy/wp-content/uploads/2018/03/papel-slide.png";
    }else{
        imgMaquina.src="https://piedrapapelotijera.uy/wp-content/uploads/2018/03/tijera-slide.png";
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

    btnSiguiente.disabled = true;
    btnAleatorio.disabled = true;

    setTimeout(function(){
        resultado.innerHTML = ""
        imgMaquina.src="/images/pregunta.png"
        imgHumano.src="/images/pregunta.png";
        btnSiguiente.disabled = false;
        btnAleatorio.disabled = false;
    }, 2000);
}



btnSiguiente.addEventListener("click", eleccion)
btnAleatorio.addEventListener("click", eleccionRandom)




