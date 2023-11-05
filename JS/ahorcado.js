debugger
const cantIntentos = 8; //define la cantidad de intentos
let palabra = "coderhouse";
let palabraMostrada = "**********";

// define la funcion que reemplaza los * por letras cuando coinciden
function CambiarLetra(letra, palabra) {
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            let nuevaPalabra = palabraMostrada.slice(0, i) + letra + palabraMostrada.slice(i+1);
            palabraMostrada = nuevaPalabra;         
        }
    }    
}

// Crea un ciclo de 8 intentos
for (let j = 1;j<=cantIntentos;j++){
    // Solicita el ingreos de una letra
    let letra = prompt("Ingrese una letra");
    // valida que se haya ingresado una letra
    while (!letra.match(/^[a-zA-Z]+$/)|| letra.length>1){ // ****** Revisar mas de una letra ***** //
        alert("Debes ingresar una letra"); 
        letra = prompt("Ingrese una letra");
    }
    // convierte la letra ingresada a minuscula
    letra = letra.toLowerCase(letra);

    // Llama a la función que cambia las letras
    CambiarLetra(letra, palabra);
    alert(palabraMostrada);    
}


