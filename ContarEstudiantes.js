// Cuenta los estudiantes de un país
// Este ejercicio consiste en obtener el total de estudiantes que pertenecen a un país, para lo cuál recibiremos 2 arreglos, uno de estudiantes (donde cada estudiante tendrá el id del país al que pertenece) y uno de países.

// Ejemplos
// Recibimos los siguientes datos:
// students = [ { name: 'Georg', email: 'georg@academlo.com', country_id: 1, }, { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2, }, { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2, } ];
// countries = [ { id: 1, name: 'Mexico', }, { id: 2, name: 'Colombia', } ];
// countryName = 'Colombia'
// El valor que debemos retornar es 2 ya que 3 estudiantes pertenecen a Colombia
// Descripción de la función
// Escribe el código necesario en la función countStudents() para que retorne el número total de estudiantes que pertenecen a un país.
// Parámetros de la función:
// array students: El arreglo de los estudiantes.
// array countries: El arreglo con todos los países.
// string countryName: El nombre del país del cual queremos contar los estudiantes.
// Retorno de la función
// number: El total de estudiantes que pertenecen al país recibido en la función.
// Restricciones
// Los objetos dentro del arreglo de estudiantes siempre tendrán la siguiente forma:
// { name: 'nombre', email: 'correo', country_id: 'id_del_pais_al_que_pertenece_el_estudiante' }

// Los objetos dentro del arreglo de countries siempre tendrán la siguiente forma:
// { id: 'id_del_país', name: 'nombre del pais' }

function countStudents(students, countries, countryName) {
    let number = 0;
        for ( let i = 0; i < students.length; i++){
            for ( let j = 0; j < countries.length; j++){
                if (countryName === countries[j].name){
                    if (students[i].country_id === countries[j].id){
                        number = number + 1;
                    }
                }
            }
        }
        return number;
}
