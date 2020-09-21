## Modulo 03 DEMO

Ejecución báscia de un javascript

Nos creamos un arry de objetos personas

```javascript
const personsLst = [
    { name: 'Adam adam', age: 22, email: 'adam@example.com'},
	....
	{name: 'william rasmussen',age: 25,email: 'william@example.com'}
	]
```
llenamos otro array personAboveAge con las personas cuya edad es mayor o igual a una edad pasada por parametro y mostramos los dos arrys por consula

```javascript
const age = 20;

function getPersonsAboveAge(array, age) {
    const personAboveAge = [];
    for (let person of array) {
        if (person.age >= age) {
            personAboveAge.push(person);
        }
    }
    return personAboveAge;
}


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

```

Las instrucciones para realizar esta práctica se encuentran en  [20480C_MOD03_DEMO](20480C_MOD03_DEMO.md)

