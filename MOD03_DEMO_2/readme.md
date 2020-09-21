## Manipulación del DOM mediante javascript


Partimos de un documento que contiene un formulario siendo uno de los elementos el siguiente

``` javascript
<div id="hobbiesList">
 <input type="text" name="hobby" class="hobbiesInput" />
 <button type="button" id="newHobbyBtn">Add hobby</button>
</div>
```


el javascript va a asociar al evento click al button una función la cual añadirá un nuevo input text
si ya hay cinco elementos lo que hará es desacoplar el evento al botón

Para añadir elementos al DOm necesitamos dos funciones una para crearlo y otro para añadirlo a su padre

```javascript
function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}
```
la funcion que me mira si son cinco elementos ...
```javascript
function addHobbies() {
    const inputList = document.querySelectorAll('.hobbiesInput'); //utiliza el querySelectorAll con lo cual inputList es un array con los inputs
    /* si son menos de 5 crea un br y un imput y a este input le añade la clase hobbiesList y los añado al padre*/
	if (inputList.length < 5) {
        const hobbiesList = document.getElementById('hobbiesList');  
        const newLineElement = createNode('br'),   inputElement = createNode('input');
        inputElement.setAttribute("class", "hobbiesInput");

        append(hobbiesList, newLineElement);
        append(hobbiesList, inputElement);
    }
    else {
       /* si ya son cinco removeEventListener */
        document.getElementById('newHobbyBtn').removeEventListener('click', addHobbies);
    }

}
```

Por último añadimos el evento 

```javascript
document.addEventListener('DOMContentLoaded', function (event) { 
    document.getElementById('newHobbyBtn').addEventListener('click', addHobbies, false);
});
```
al meter el escuchador en DOMContentLoaded lo que hace es que hasta que no esta creada todas la página no se ejecuta lo de dentro

