/*Crear una función que realice el siguiente funcionamiento:
input = 38
3 + 8 = 11
1 + 1 = 2
output = 2
*/


const digitos = 9999999999999;

function sumarDigitos(digitos) {
    let digitosString = digitos.toString();
    if (digitosString.length > 1){
        let acumulado = 0;
        for (let i = 0; i < digitosString.length; i++) {
            let numeros = parseInt(digitosString[i])
            acumulado = acumulado + numeros;
        }
        return sumarDigitos(acumulado)
    } else {
        return parseInt(digitosString)
    }
}


console.log(sumarDigitos(digitos));


