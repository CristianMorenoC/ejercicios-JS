// 2. Crear una función que, dado un número entero, determine si es
// potencia  de  2,  si  esto  se  cumple,  retornar  true,  de  lo  contrario,  retornar 
// false.

// 	input  = 1

// 	output: true, ya que 2^0 = 1

// 	input = 16

// 	output: true, ya que 2^4 = 16

// 	input = 3

// 	output: false



let numero = 32;

function numerosCuadrados (numero) {
    if (numero === 1){
        return true;
    }else if (numero % 2 === 0){
        numero = numero/2;
        return numerosCuadrados(numero)
    }else {
        return false;
    }
}

console.log(numerosCuadrados(numero));
