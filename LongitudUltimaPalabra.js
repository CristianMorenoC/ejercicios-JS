// Encuentra la longitud de la última palabra en la frase frase
// Este ejercicio consiste en saber obtener la el número total de letras que contiene la última palabra de una frase.

// Ejemplos
// En la frase "Hoy es un buen día para programar " la última palabra que es "programar" contiene 9 letras.
// En la frase "Estoy aprendiendo mucho" la última palabra que es "mucho" contiene 5 letras.
// Descripción de la función
// Escribe el código necesario en la función countLastWordLength() para que retorne la cantidad de letras en la última palabra de la frase.
// Parámetros de la función:
// string phrase: frase de la cual obtendrás la última palabra y posteriormente la longitud de esta última palabra.
// Retorno de la función
// number: El número total de letras de la última palabra de la frase.
// Restricciones
// N/A

// Ejemplos
// Ejemplo de entrada
// phrase = "Hola me llamo Juan"
// Ejemplo de salida
// 4
// Explicación de la salida
// La última palabra de la frase "Hola me llamo Juan" es Juan, la cuál contiene 4 letras.

function countLastWordLength(phrase) {
    const espacio = phrase.lastIndexOf(' ')+1;
    const ultimo = phrase.length;
    const result = ultimo - espacio;
    console.log(result)
    return result;
 }

countLastWordLength('siete letras tiene la palabra, palabra')