// Encuentra la edad que se repite más veces.
// Este ejercicio consiste en encontrar la edad que más se repite en un arreglo de estudiantes.

// Ejemplos
// Recibimos los siguientes datos:
// students = [ { name: 'Georg', age: 23, }, { name: 'Andrea', age: 23, }, { name: 'Daniela', age: 25, }, { name: 'José', age: 27, } ];
// La edad que se repite más veces es 23
// Descripción de la función
// Escribe el código necesario en la función findRepeatedAge() para que retorne la edad que se repite más veces.
// Parámetros de la función:
// array students: El arreglo con todos los estudiantes.
// Retorno de la función
// Number: La edad que se repite más veces.
// Restricciones
// Los objetos dentro del arreglo de estudiantes siempre tendrán la siguiente forma:
// { name: 'nombre', age: 'edad_del_estudiante', }

function findRepeatedAge(students) {
    const array = [];
                for ( let i = 0; i < students.length; i++){
                    let newObject = {
                        name: students[i].age,
                        suma: 0,
                    }
                    for ( let j = 1; j < students.length; j++){
                        if (students[i].age === students[j].age){
                            newObject.suma++;
                        }
                    }
                    array.push(newObject); // {name: 23, suma: 1}
                }
    array.sort(function(a, b){return b.suma - a.suma});
    let number = array[0].name;
    return number;
}



