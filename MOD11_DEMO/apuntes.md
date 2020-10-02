### Creating Interactive Graphics by Using SVG



2D vectoriales

SVG  <-- XMLdd

tag svg manipulabe DOM, sytle por css y javascript

la velocidad de rendering depende del numero de elementos

hay diferentes elementos dispoibles como rect , circle, ellipse, polygon, path , etc...


Para dibujar hay que crear primero el svg 
```html 
<svg xmlns="http://www.w3.org/2000/svg">
``` 
y podemos defirle width, height, etc 


ejemeplos 

creaccion de un rectangulo
```javascript
<svg xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="75" rx="20" ry="20" fill="red" stroke="blue" />
  <rect x="75" y="75" width="100" height="75" fill="yellow" stroke="blue" />
</svg>
```

<svg xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="75" rx="20" ry="20" fill="red" stroke="blue" />
  <rect x="75" y="75" width="100" height="75" fill="yellow" stroke="blue" />
</svg>
 
 
 
 Estilo al svg y diferentes elementos
 
<svg xmlns="http://www.w3.org/2000/svg" style="border: 2px solid darkblue;background-color: lightgreen;width: 400px; height: 400px;">
<polygon points="110 70, 150 40, 190 70, 190 160, 150 130, 110 160" fill="yellow" stroke="blue" />
<rect x="50" y="250" width="100" height="75" rx="20" ry="20" fill="red" stroke="blue" />
<circle cx="250" cy="280" r="40" stroke="blue" fill="red" />
<ellipse cx="150" cy="390" rx="110" ry="30" stroke="blue" fill="yellow" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" style="border: 2px solid darkblue;background-color: lightgreen;width: 250px; height: 250px;">

<polyline points="105 100, 120 100, 125 90, 135 110, 145 90, 155 110, 165 90, 175 110, 180 100, 195 100" fill="none" stroke="blue" />
</svg>
	
```html
<svg xmlns="http://www.w3.org/2000/svg" style="border: 2px solid darkblue;background-color: lightgreen;width: 400px; height: 400px;">
<polygon points="110 70, 150 40, 190 70, 190 160, 150 130, 110 160" fill="yellow" stroke="blue" />
<rect x="50" y="250" width="100" height="75" rx="20" ry="20" fill="red" stroke="blue" />
<circle cx="250" cy="280" r="40" stroke="blue" fill="red" />
<ellipse cx="150" cy="390" rx="110" ry="30" stroke="blue" fill="yellow" />
<polyline points="105 100, 120 100, 125 90, 135 110, 145 90, 155 110, 165 90, 175 110, 180 100, 195 100" fill="none" stroke="blue" />
</svg>
```
 
 
 
tambien podemos dibujar mediante path 


 
POLYGON DRAWN BY USING AN svg ELEMENT con el tag path
 
		d dibuja el contorno 
		M nueva posicion sin dibujar la linea
		L dibuja la linea
		A dibuja un arco eliptico
		P curva cuadartica de Bézier
		C curva cuadartica de Bézier
		Z cierra el ultimo punto con el primero


<svg xmlns="http://www.w3.org/2000/svg">
    <path d="M 150 50 L 250 150 L 50 150 Z" fill="red" stroke="blue" />
</svg>

```html
<svg xmlns="http://www.w3.org/2000/svg">
    <path d="M 150 50 L 250 150 L 50 150 Z" fill="red" stroke="blue" />
</svg>
<!--  M >situate en el 150 50
 L dihuja una linea a 250 150
 sigue a 250 150
 sigue a 50 150
 y Z (terminado)  TRIANGULO -->
```` 

 tememos más atributos 
 ```html
 <rect x="70" y="70" width="50" height="50"
             fill="yellow" 
             fill-opacity="0.5"
             stroke="purple" 
             stroke-width="2" 
             stroke-dasharray="2 2 6 6" /> <!-- // va viendo longitudes -->
</rect>
```` 



 linearGradient radialGradient y pattern
```html
<svg xmlns="http://www.w3.org/2000/svg">
     <defs>
    <linearGradient id = "gradient1" x1="0%" y1="0%" x2="100%" y2="0%">  
        <stop x1="0" x2="100"  y1="13" y2="20"  stop-color="yellow" />
        <stop offset="0.5" stop-color="green" />
        <stop offset="1.0" stop-color="red" />
    </linearGradient>
	 
    <radialGradient id="gradient2" fx="0.3" fy="0.3">
        <stop offset="0.1" stop-color="yellow"  />
        <stop offset="0.7" stop-color="red" />
    </radialGradient> 
	<pattern patternUnits="userSpaceOnUse" width="100" height="100"> 
        <image xlink:href="wales.png" x="0" y="0" width="100" height="100" />
    </pattern>
    </defs>
	<!-- Draw shapes that make use of the gradients and patterns -->
    <polygon points="50,50 250,50 150,200" fill="url(#gradient1)" />
    <ellipse cx="150" cy="50" rx="100" ry="20" fill="url(#wales)" />
    <circle cx="150" cy="250" r="50" fill="url(#gradient2)" />
</svg>
```

 
TEXTOS
Podemos hacer cosas con los textos 
```html
<text>
<svg xmlns="http://www.w3.org/2000/svg">
    <text x="20" y="50" 
             fill="yellow" stroke="purple" stroke-width="2" 
             font-size="36" font-family="verdana" font-weight="bold" text-decoration ="underline">
                 Styled text
    </text>
</svg>
```
paths
```html
<svg xmlns="http://www.w3.org/2000/svg">
    <text x="20" y="50" 
             fill="yellow" stroke="purple" stroke-width="2" 
             font-size="36" font-family="verdana" font-weight="bold" text-decoration ="underline">
                 Styled text
    </text>
	
	 <path id="wavyPath1" 
              fill="none" stroke="green" stroke-width="5"
              d="M 50 250 
                    C 150 150 250 50 350 150 
                    C 450 250 550 350 650 250 
                    C 750 150 850 150 850 150" />
    <text font-size="46" fill="red" font-family="Verdana">
        <textPath xlink:href="#wavyPath1">
            Mae hen wlad fy nhadau yn annwyl i mi!
        </textPath>
    </text>
	
</svg>

```
ó formulas con 
```html
<svg xmlns="http://www.w3.org/2000/svg" id="textSpans">
    <defs>
        <path id="wavyPath2" 
                  d="M 50 250 
                        C 150 150 250 50 350 150 
                        C 450 250 550 350 650 250 
                        C 750 150 850 150 850 150" />
    </defs>
    <text font-size="46" fill="orange" font-family="Verdana" stroke="purple">
        <textPath xlink:href="#wavyPath2">
            <tspan>Cubic equation: 5x</tspan>
            <tspan dy="-30" fill="green" font-size="33">3</tspan>
            <tspan dy="+30"> + 4x</tspan>
            <tspan dy="-30" fill="green" font-size="33">2</tspan>
           <tspan dy="+30"> + 6x - 5 = 0</tspan>
        </textPath>
    </text>
</svg>
 ```

 
 
 
 
agrupar para tratar como si fuera una sola forma elemento g
```html
<svg xmlns="http://www.w3.org/2000/svg" id="decoratedText">
    <g fill="yellow" stroke="purple" stroke-width="2" font-size="36" font-family="verdana" font-weight="bold">
        <text x="20" y="50">Normal text</text>
        <text x="20" y="150" text-decoration="line-through">Text with line through</text>
        <text x="20" y="250" text-decoration="underline">Underlined text</text>
        <text x="20" y="350" text-decoration="underline line-through">
            Underlined text with line through
        </text>
    </g>
</svg>

```
 


transformaciones



rotate  (ángulo, cx, cy): gira la forma en el ángulo especificado, alrededor del punto central especificado (cx, cy).
translate (dx, dy): traslada la forma a la distancia especificada en las direcciones X e Y.
scale (sx, sy): escala la forma por la fracción especificada en las direcciones X e Y.
skewX (ángulo): sesga la forma en el ángulo especificado en la dirección X.
skewY (ángulo): sesga la forma en el ángulo especificado en la dirección Y.


```html

<svg xmlns="http://www.w3.org/2000/svg" id="transformations" >
    <defs>
        <pattern id="checkerPattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect fill="red"  x="0"  y="0"  width="40" height="40" />
            <rect fill="blue" x="40" y="0"  width="40" height="40" />
            <rect fill="blue" x="0"  y="40" width="40" height="40" />
            <rect fill="red"  x="40" y="40" width="40" height="40" />
        </pattern>
    </defs>
   
    <rect x="0" y="0" width="200" height="200" fill="url(#checkerPattern)"  stroke="orange" stroke-width="5" />
    <g transform="translate(200, 200)">
        <g transform="scale(0.5)">
            <g transform="rotate(20, 160, 160)">
                <rect x="0" y="0" width="200" height="200" fill="url(#checkerPattern)" stroke="orange" stroke-width="5" />
            </g>
        </g>
    </g>
</svg> 
```` 