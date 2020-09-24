## DEMO Module 5: Communicating with a Remote Server

La demo trata de acceder a una api https://randomuser.me/api/?results=3 y presentar el resultado en pantalla
Esta api devuelve un json de personas de forma aleatoria (la query ressults indica el numero de personas devueltas)

el json devuelve multitud de datos por persona pero a nostros nos interesa en la practica
```json
results":[
      {
         "name":{
            "title":"Miss",
            "first":"Laura",
            "last":"Nichols"
         },
          "email":"laura.nichols@example.com",
         "picture":{
            "large":"https://randomuser.me/api/portraits/women/28.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/28.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/28.jpg"
         }
    },
    {....}
    ]
```

la pagina html tiene el siguiente marcado

```html
             <button id="addPersonsBtn">Get Persons</button>
             <hr />
             <table id="PersonTable">
                 <tr>
                     <th>Full name</th>
                     <th>Picture</th>
                     <th>Email</th>
                 </tr>
             </table>
```

en el script
añadiremos el escuchador de eventos al button
````javascript
document.addEventListener('DOMContentLoaded', function (event) {
        document.getElementById('addPersonsBtn').addEventListener('click', getPersons);
    });
/* document.addEventListener('DOMContentLoaded', function (event) es similar a document.ready ya que el script lo añadimos al head */
````


La llamada a la api con fecth es sencilla ya que es un try catch.
Básicamente todas las llamadas a las apiweb con fectch tienen el mismo patron
```javascript
const personApiUrl = "https://randomuser.me/api/?results=3";

async function getPersons() {
    try {
        let response = await fetch(personApiUrl);
        if (response.ok) {
            //Converting the response to Json
            const data = await response.json();

            console.log(data); // es un objeto
            console.log(data.results); // es un array en este caso es el que tenemos que devolver
            ................................................
        }
    }
    catch (e) {
        console.log(e);
    }
}
```

Por último haremos el tratamiento del data que es un json, se podía hacer de muchas formas pero es util la función map
https://www.w3schools.com/jsref/jsref_map.asp

The map() method creates a new array with the results of calling a function for every array element, calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.

```javascript
/* Puedes comprender mejor el funcionamiento de map con este script
   escribe el cubo de los elementos de un array
*/
  <script>
        var numbers = [4, 9, 16, 25];

        function myFunction() {
            x = document.getElementById("demo")
            numbers.map(function (valor) {
               // alert (valor); // asi ves que ejecuta la funcion por cada elemento
               // x.innerHTML += "el cubo de " + valor + " es " + Math.pow(valor, 3) + "<br>";
                x.innerHTML += `el cubo de . ${valor}. es . Math.pow(${valor}, 3). <br> `; // `  es el operador de concatenación

            }
            );
        }
        myFunction();
    </script>

```

uan vez sabido el funcionamiento de map lo que hace por cada elemento (auther)
crea la trd, las tds añade los innerHTML
y hace los appends

```javascript
            
            data.results.map(function (auther) {
            
                //Create new element to insert into the table
                const tr = createNode('tr'),
                    fullNameRow = createNode('td'),
                    PicRow = createNode('td'),
                    PicEl = createNode('img'),
                    emailRow = createNode('td');
                //Insert the data into the element
                fullNameRow.innerHTML = `${auther.name.title}. ${auther.name.last} ${auther.name.first}`;
                PicEl.src = auther.picture.medium;
                emailRow.innerHTML = auther.email;
                //Insert the elements into the table
                append(tr, fullNameRow);
                append(PicRow, PicEl);
                append(tr, PicRow);
                append(tr, emailRow);
                append(table, tr);
            })
````

