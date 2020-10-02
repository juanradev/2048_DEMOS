#### Cookies


### sessionStorage (se eleimina cuando el usuario finaliza su borwser session

if( window.sessionStorage ){
    ...
}

set:  si no existe retorna null

sessionStorage.setItem("myKey","some text value");  // setItem function
sessionStorage["myKey"] = "some text value";        //  name-key pair
sessionStorage.myKey = "some text value";           // pseudo-properties
 
get:
var textFromSession = sessionStorage.getItem("myKey"); // getItem
var textFromSession2 = sessionStorage["myKey"];        //  name-key pair
var textFromSession3 = sessionStorage.myKey;           // pseudo-properties


Si necesitamos almacenar un obetjo serializar con JSON.stringify() 

tambien son accesibles como un array

var listDiv = document.getElementById("myList");
for(var i=0; i<sessionStorage.length; i++)
{
    listDiv.innerHTML += "<br />" + sessionStorage.key(i) + sessionStorage.value(i);;
}


eliminar sessionStorage.removeItem("myKey");


sessionStorage.clear();


### localStorage  persistencia entre sesiones

if( window.localStorage ){
    ...
}

localStorage.setItem("myKey","some text value");
var textData = localStorage.getItem("myKey");
   
localStorage["myKey"] = "some text value";
var textData = localStorage["myKey"];
   
localStorage.myKey = "some text value";
var textData = localStorage.myKey;


var listDiv = document.getElementById("myList");
   
Para almezar objetos utilizar  JSON.stringify()   

for(var i=0; i<localStorage.length; i++)
{
    listDiv.innerHTML += "<br />" + localStorage.key(i);
}

localStorage.removeItem("myKey");

localStorage.clear();


### Eventos 

•	key: The name of the value which has changed.

•	oldValue: The original value before the change.

•	newValue: The new value.

•	url: The document whose script is the origin of the event.

•	storageArea: A reference to the store that has changed (session or local).


storage tanto para localStorage como sessionStorage

window.addEventListener("storage", myStorageCallback, true | false );
function myStorageCallback( e ) {
    alert("Key:" + e.key + " changed to " + e.newValue);
}


indexDb APi
funciones asyc  add put get and delete 

CREACCION:

var db; // Reference to the database to use
var openRequest = indexedDB.open("contosoDB");
openRequest.onsuccess  = function(event) {
    db = event.target.result;
};
openRequest.onerror = function(event) {
    alert("Error " + event.target.errorCode + " occurred while opening the database");
};

ADD

var newAttendee = {
    id: "2",
    name: "Eric Gruber",
    password: "Pa$$w0rd"
};
   
var addRequest = attendeeStore.add(newAttendee);
addRequest.onsuccess = function(event) {
  // Attendee was successfully added
}
addRequest.onerror = function(event) {
  // Handle failure
};

put 

var updatedAttendee = {
    id: "2",              // Id of existing attendee
    name: "Eric Gruber",
    password: "P@ssw0rd" // Change the password
};
   
var updateRequest = attendeeStore.put(updatedAttendee);
updateRequest.onsuccess = function(event) {
  // Attendee was successfully updated
}
updateRequest.onerror = function(event) {
  // Handle failure
};


delete

var deleteRequest = attendeeStore.delete("1"); // Remove the details for Rachel Valdez
deleteRequest.onsuccess = function(event) {
  // Attendee was successfully deleted
}
deleteRequest.onerror = function(event) {
  // Handle failure
};


get 

var getRequest = attendeeStore.get("2"); // Retrieve the details for Eric Gruber
getRequest.onsuccess = function(event) {
  // Attendee details are available in event.target.result
  attendee = event.target.result;
}
getRequest.onerror = function() {
  // Handle failure
};


## OFFLINE

1. Condigurar el CACHE MANIFEST extension manifest

Empieza siempre por CACHE MANIFEST y los comentarios son #

1.1. CACHE: (htmls, csss , imagenes, jss...)  Los recursos enumerados en esta sección se descargan una vez, cuando la página web se carga inicialmente en el navegador del usuario. A partir de entonces, se utilizará la versión en caché de estos recursos y no se actualizarán desde el servidor.
1.2. NETWORK: login  Los recursos enumerados en esta sección siempre se descargarán si la red está disponible. No se almacenan en caché
1.3. FALLBACK  alternatives paths  ajax/account/    noCode.htm
Los recursos enumerados en esta sección no se almacenan en caché, pero usted proporciona una URL alternativa para ellos en caso de que el servidor no esté disponible. 
En el ejemplo que se muestra, todas las URL con el prefijo ajax / account /   se reemplazarán con el archivo noCode.htm si no se pueden recuperar. Los recursos alternativos, como el archivo noCode.htm del ejemplo, se almacenan en caché.

Note: The .manifest extension file is of a new MIME type called text/cache-manifest.
You may need to configure the web server to serve this type of file by adding this new MIME type, if it is not already set up.
	   
hay que añadir en cada página <html manifest="appcache.manifest">


accesebile a traves de window.applicationCache 

• checking: Este evento se activa cuando el navegador examina la caché de la aplicación en busca de actualizaciones.
• downloading: Este evento se activa cuando el navegador comienza a descargar recursos al caché de la aplicación.
• updateready: Este evento se activa cuando se descarga la nueva versión de los objetos almacenados en caché para una página web.
• obsolete: Este evento se activa si el archivo de manifiesto ya no está disponible y la caché de la aplicación ya no es válida para la página web actual.
• cached: Este evento se activa cuando la caché de la aplicación está lista y disponible para su uso.
• error: Este evento se activa si se produce un error al descargar recursos en la memoria caché o cuando se buscan recursos para descargar.
• noupdate: Este evento se activa si no se encontraron cambios después de verificar si hay actualizaciones en el manifiesto.
• progress: Este evento se activa cuando cada recurso especificado en el manifiesto se descarga en la caché de la aplicación.


ejemplo
applicationCache.addEventListener( "error", function() {
    alert( "Error while downloading resources to the application cache");
}, true );

propiedad status
0 UNCACHED The page is not associated with a cache. No resources have been downloaded
1 IDLE All cached resources have been downloaded. The cached event has been fired.
2 CHECKING The cache is being checked for updates to download. The checking event has been fired. If no updates are found, the noupdate event is fired.
3 DOWNLOADING Resources are being downloaded to the cache. The downloading event has been fired.
4 UPDATEREADY The cache has been updated with new resources, and all resources have been downloaded. The updateready event has been fired.
5 OBSOLETE The manifest is missing and no cache is available. The obsolete event has been fired.

Triggering Resource Updates by Using the Manifest
Para forzar el refresco de la cache hay que hacer un cambio al manifiesto por ejemeplo cambiar un comentario con el numero de version
#version=1.2.3
También se puede forzar con 

applicationCache.update();
...
if (applicationCache.status == 4 ) { // UPDATEREADY
    applicationCache.swapCache();
}


Testing for Network Connectivity


var s;
   
function onlineStatus() {
    s.innerHTML = "Online.";
}
   
function offlineStatus() {
    s.innerHTML = "Offline.";
}
   
onload = function() {
   
    s = document.getElementById("statusDiv");
    if( navigator.onLine ) {
        onlineStatus();
    } else {
        offlineStatus();
    }
   
    window.addEventListener("online", onlineStatus, true);
    window.addEventListener("offline", offlineStatus, true);
}

