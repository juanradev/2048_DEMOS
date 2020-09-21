


/* Array de objetos  
  cada objeto tiene las siguientes propiedades name, age, email */
const personsLst = [
    {
        name: 'Adam adam',
        age: 22,
        email: 'adam@example.com'
    },
    {
        name: 'eve perkins',
        age: 18,
        email: 'eve@example.com'
    },
    {
        name: 'melvin wood',
        age: 20,
        email: 'melvin@example.com'
    },
    {
        name: 'signe lorenzo',
        age: 19,
        email: 'signe@example.com'
    },
    {
        name: 'william rasmussen',
        age: 25,
        email: 'william@example.com'
    }]

var listainicial = document.getElementById("inicial");
var listafinal = document.getElementById("final");


const age = 20;

/* funcion que recibe un arry de personas y un entero 
 recorre el array y por cada persona cuya edad es mayor del enetro lo añade a un nuevo array
 que al final es retornado */
 
function getPersonsAboveAge(array, age) {
    const personAboveAge = [];

    for (let person of array) {

        if (person.age >= age) {
            personAboveAge.push(person);
        }
    }
    return personAboveAge;
}

/* funcion que pinta en consola un arry de personas */

function printArray(array , elementolista) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].name} (${array[i].age}) ${array[i].email}`);
        /* est sintaxis es lo mismo que concatenar los elementos */
    }
}


function init() {
    printArray(personsLst);
    const personAboveAge = getPersonsAboveAge(personsLst, age);
    printArray(personAboveAge);

}