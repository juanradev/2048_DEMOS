## Módulo 15: Empaquetado de JavaScript para implementación de producción

### Demostración: uso de la CLI de Babel para compilar código JavaScript

Despues de crear el proyecto nos disponemos a añadir un npm configuration file

![alt text](./imagenes/00noEnpmConfigurationfile.PNG "npm Configuration file?")

Como no lo tenemos da lo mismo abrimos terminal y ejecutamos npm init -y 
![alt text](./imagenes/01npminit.PNG "npm init -y")

Con ello nos crea el package.json
![alt text](./imagenes/02packagejson.PNG "package.json")

el nombre no le mola así que lo cambiaremos por   "name": "babeldemo-app",



Añadimos al proyecto el fichero src/index.js con codigo EM6
![alt text](./imagenes/03index,js.PNG "src/index.js")

desde terminal ejecutamos 
04 npm install --save-dev babel-cli babel-preset-es2015.PNG
![alt text](./imagenes/04npminstallsavedevbabel.PNG " install babel ")



Modificamos el package.json

  "scripts": {
    "build": "babel --presets es2015 src -d dist"
  },
![alt text](./imagenes/05updatescriptsection.PNG "modificar script")

y ejecutamos en terminal npm run build (desde Code basta con pulsar en debug -dentro de la vista del fichero-, si no teclealo en terminal)
![alt text](./imagenes/05_npmrunbuild.PNG "npm run build")


con ello nos crea en la carpeta dist lo que tengamos en la carpeta run 
es decir el index.js pero en EM5
![alt text](./imagenes/06distindex.PNG "dist")


por último añadimos la carpeta dist al proyecto
![alt text](./imagenes/07incluirdistenelproyecto.PNG "fin añadir al proyecto")

 



