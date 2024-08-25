let intentos =0;
let numeroSecreto = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function anadirTexto(seccion, texto){
    let elemento = document.querySelector(seccion);
    elemento.innerHTML = texto;
    return;
}

function generarNumeroSecreto (){

    let numeroGenerado= Math.floor(Math.random() * 10 ) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length === numeroMaximo){
        anadirTexto('p', 'Se han generado todos los numeros posibles');
    }
    else{

    
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto(); // RECURSION Y Condicion de Salida
    }
    else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function verificarIntento(){
 
    let numero = parseInt(document.getElementById('valorID').value);     
    console.log(intentos);
    if (numero === numeroSecreto){
        anadirTexto('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
        else {
            if (numero < numeroSecreto){
            anadirTexto('p', 'El numero es mayor');
        }

        else {
            anadirTexto('p', 'El numero es menor');
        }
    vaciarTextBox();
    intentos++;
    }
}   
    function vaciarTextBox(){
        document.querySelector('#valorID').value = '';   
    }


    function condicionesIniciales(){
        anadirTexto('h1', 'Juego Secreto Nick');
        anadirTexto('p', 'Selecciona un numero del 1 al 10');
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
    }

    function reiniciarJuego(){
        condicionesIniciales();
        vaciarTextBox();
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');
        
        //La funcion debe reiniciar las condiciones Iniciales del juego:
        //Reiniciar el mensaje del Juego Secreto
        //Generar un nuevo numero Secreto
        //Intentos en 1
        //La entrada vacia
        //El Boton "Nuevo Juego" deshabilitado
    
    }


    // console.log(typeof(numeroSecreto));
    // console.log(typeof(numero));
    // console.log(numeroSecreto);
    // console.log(numero);
    // console.log(numeroSecreto === numero);
    // return;

    condicionesIniciales();