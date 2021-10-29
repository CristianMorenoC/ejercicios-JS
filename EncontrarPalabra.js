// Encuentra la palabra en la frase
// Este ejercicio consiste en saber si una frase contiene o no una palabra en particular.

// Ejemplos
// La frase "Hoy es un buen día para programar" sí contiene la palabra "programar".
// La frase "Estoy aprendiendo mucho" no contiene la palabra "programar".
// Descripción de la función
// Escribe el código necesario en la función findWord() para que retorne si la palabra existe en la frase.
// Parámetros de la función:
// string phrase: frase en la cuál buscaras la palabra
// string word: palabra que deberas buscar en la frase
// Retorno de la función
// boolean: true si la palabra existe en la frase, false si la palabra no existe en la frase
// Restricciones
// N/A

// Ejemplos
// Ejemplo de entrada
// phrase = "Hola me llamo Juan"
// word = "Daniel"
// Ejemplo de salida
// false
// Explicación de la salida
// La palabra "Daniel" no existe en la frase "Hola me llamo Juan" por lo tanto la función retorna falsre


function findWord(phrase, word) {
    const answer = phrase.includes(word);
    console.log(answer)
    return answer;
}

findWord('hoy es un buen dia para aprender a programar','programar');