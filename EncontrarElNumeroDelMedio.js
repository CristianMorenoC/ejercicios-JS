// Encuentra el número que se encuentra en la mitad de un arreglo
// Este ejercicio consiste en recibir un arreglo de números y devolver el número que se encuentre en medio.

// Ejemplos
// Ejemplo 1
// Recibimos el arreglo:
// [10, 34, 54, 23, 23]
// El número que encuentra en medio es el 54
// Ejemplo 2
// Recibimos el arreglo:
// [8, 4, 6, 3, 7, 20]
// Los números que se encuentran en medio son [6, 3]
// Descripción de la función
// Escribe el código necesario en la función findMiddleNumer() para que retorne el o los números que se encuentran en medio.
// Parámetros de la función:
// array array: El arreglo que contiene los números.
// Retorno de la función
// Array: Si la longitud es par devolvemos un arreglo con los 2 números que se encuentra en medio.
// Number: Si la longitud es impar retornamos el número que se encuentra en medio.
// Restricciones
// N/A.

// Ejemplo
// Ejemplo de entrada
// data = [3, 5, 7, 1, 4, 4]
// Ejemplo de salida
// [7, 1]
// Explicación de la salida.
// La longitud del arreglo es 6(par) por lo cuál regresamos un arreglo con los valores que se encuentran en medio.

// Ejemplo2
// Ejemplo de entrada
// data = [20, 100, 32, 23, 23]
// Ejemplo de salida
// 32
// Explicación de la salida.
// La longitud del arreglo es 5(impar) por lo cuál regresamos el valor que se encuentra en medio.

function findMiddleNumber(array) {
    if (array.length % 2 === 0){
        for (let i=2; i<=array.length; i++ ){
            array.pop();
            array.shift();
        }return array;
    }else{
        for (let i = 1; i <= array.length; i++){
            array.pop();
            array.shift();
        }return array[0];
    }
}


