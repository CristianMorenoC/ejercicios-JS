// Elimina un usuario
// Este ejercicio consiste en eliminar un usuario (usando su correo como identificador) de un arreglo de usuarios.

// Ejemplos
// Recibimos los siguientes datos:
// arreglo = [ { name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' } ]
// email = erik@academlo.com
// El arreglo que debemos retornar es
// [ { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' } ]
// Descripción de la función
// Escribe el código necesario en la función deleteUser() para que retorne un arreglo con todos los usuarios menos el que se elimina.
// Parámetros de la función:
// array users: El arreglo del cual obtendremos los correos.
// string email: El correo del usuario que deberá eliminarse.
// Retorno de la función
// Array: Arreglo con todos los correos a excepción del eliminado.
// Restricciones
// Los objetos dentro del arreglo que recibe la función siempre tendrán el siguiente formato:
// { name: 'nombre', email: 'correo' }

// En el arreglo de usuarios el correo es único, lo cuál significa que nunca tendrás más de un usuario con el mismo correo

// Ejemplos
// Ejemplo de entrada
// users = [ { name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' } ]

// email = erik@academlo.com
// Ejemplo de salida
// [ { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' } ]
// Explicación de la salida
// El usuario que se elimina es el que contiene el correo erik@academlo.com, por lo cuál retornamos todos los usuarios a excepción de el eliminado

function deleteUser(users, email) {
    for (let i = 0; i < users.length; i++){
        if (users[i].email.includes(email)) {
            users.splice([i], 1);
        }
    }return users;
}

