transiciones automaticas
```css
div {
    width: 300px;
}
div:hover {
    width: 600px;
}
````
aplicando tiempo
```css
div {
    width: 300px;
    transition: width 2s;
}
div:hover {
    width: 600px;
}
````

valores de la transition
````css
div {
    width: 400px;
    height: 60px;
    background-color: yellow;
    transition: width 2s, height 2s, font-size 2s, background-color 3750ms;
}
div:hover {
    width: 600px;
    height: 80px;
    font-size: large; 
    background-color: red
}
````

  <div id="div1" > transition-timing-function:ease</div><br/>
  <div id="div2" > transition-timing-function:linear</div>

  <style>  
#div1  {
    width: 400px;
    height: 60px;
    background-color: yellow;
    transition: width 2s, height 2s, font-size 2s, background-color 3750ms;
    transition-timing-function:ease ;
}

#div2  {
    width: 400px;
    height: 60px;
    background-color: blue;
    transition: width 2s, height 2s, font-size 2s, background-color 3750ms;
     transition-timing-function:linear ;
}
 

#div1:hover, #div2:hover {
    width: 600px;
    height: 80px;
    font-size: large; 
    background-color: red
}
</style>



  <style>  
#div1 {
    width: 400px;
    height: 60px;
    background-color: yellow;
    
    transition: width 2s, height 2s, font-size 2s, background-color 3750ms;
}
#div1:hover {
    width: 600px;
    height: 80px;
    font-size: large; 
    background-color: red
}
</style>


cnc propiedades

• transition-property: The name of the CSS property to which the transition is applied.

• transition-duration: The length of time that the transition takes. The default value is zero seconds, which means the transition happens all at once. This has the same effect as not applying a transition.

• transition-timing-function: Specifies how the speed of the transition varies during its execution. Possible values include "linear", "ease", "ease-in", "ease-out", and "ease-in-out". The default value is "ease".

• transition-delay: The length of time that must elapse before the transition starts. The default value is zero seconds, which means the transition starts immediately.

• transition: Shorthand property for the other four transition properties, in the order transition-propertytransition-durationtransition-timing-functiontransition-delay. If any of these values are not specified, the default values described above apply.


controlando los eventos
divElements[i].addEventListener("transitionend", function , true)
e.elapsedTime
e.propertyName 

```html
<script>
    function onLoad() {
        const divElements = document.querySelectorAll("div");
        for (let i = 0; i < divElements.length; i++) {
            divElements[i].addEventListener("transitionend", onTransitionend, true);
        }
    }
   
    const messagesElement = document.querySelector("messages");
   
    function onTransitionend(e) {
        messages.add(new Option(e.propertyName + ", elapsedTime " + e.elapsedTime));
    }
</script>
...
<body onload="onLoad()">
    <div>Text appearing in a div</div>
    <div>More text appearing in a div</div>
    <select id="messages"></select>
</body>
```

TRANSFORMATION

• translate(), translate3d(), translateX(), translateY(), and translateZ(): Translate the element in 2D or 3D space.

• scale(), scale3d(), scaleX(), scaleY(), and scaleZ(): Scale the element in 2D or 3D space.

• rotate(), rotate3d(), rotateX(), rotateY(), and rotateZ(): Rotate the element in 2D or 3D space.

• skew(), skewX(), and skewY(): Skew the element along the X-axis or along the Y-axis.

• matrix(), matrix3d(): Perform a 2D or 3D transformation by using a matrix to specify the transformation.

• perspective(): Define a perspective for an element that has been transformed in 3D.

• none(): Cancel any transformations that apply on an element.


```html
<button type="button">Click Me</button> 
<style>
button {
font-family: verdana, arial; 
width: 300px;
height: 40px;
background-color: yellow;
border-radius: 5px;
transform: translate(60px, -10px) skew(45deg);
}
</style>
```
<button type="button">Click Me</button> 
<style>
button {
font-family: verdana, arial; 
width: 300px;
height: 40px;
background-color: yellow;
border-radius: 5px;
transform: translate(60px, -10px) skew(45deg);
}
</style>

Transformaciones 2D
translate(tx, ty)  translateX(tx)  translateY(ty)
```css
div.translate1 {
  transform: translate(60px);
} 
```
scale(sx, sy) scaleX(sx)  scaleY(sy)
```css
div.scale1 {
  transform: scale(1.3);
}
```
rotate(angle) grados o radianes en sentido contrario a las agujas del reloj
```css
div.rotate {
  transform: rotate(30deg);
} 
```

Skewing Elements
skew(anglex, angley) skewX(anglex) skewY(angley)
```css
div.skew1 {
  transform: skew(30deg);
} 
```


transformaciones 3D 
translate3d(tx, ty, tz) translateZ(tz)
scale3d(sx, sy, sz) scaleZ(sz)
rotate3d(xnum, ynum, znum, angle)


perspetive() o css perspective
```html
<style>
    #parent {
        perspective: 300px;
        perspective-origin: -100px -50px;
    }
 
    #child1 {
        background-color: orange; 
        position: absolute;
        transform-origin: 0px 0px;
        transform: rotateY(30deg);
    }
 
    #child2 {
        background-color: orange; 
        position: absolute;
        transform-origin: 0px 0px;
        transform: rotateY(30deg) translate(250px);
    }
</style>
...
<div id="parent">
    <div id="child1">This is child1</div>
    <div id="child2">This is child2</div>
</div>
```
<style>
    #parent {
        perspective: 300px;
        perspective-origin: -100px -50px;
    }
 
    #child1 {
        background-color: orange; 
        position: absolute;
        transform-origin: 0px 0px;
        transform: rotateY(30deg);
    }
 
    #child2 {
        background-color: orange; 
        position: absolute;
        transform-origin: 0px 0px;
        transform: rotateY(30deg) translate(250px);
    }
</style>
 
<div id="parent">
    <div id="child1">This is child1</div>
    <div id="child2">This is child2</div>
</div>



Lesson 3: Applying CSS Keyframe Animations

```css
@keyframes ballmovement {
  
    0% {
        left: 0px;
        top: 0px;
        background-color: yellow;
    }
  
    33% {
        left: 100px;
        top: 160px;
    }
  
    66% {
        left: 200px;
        top: 0px;
    }
  
    100% {
        left: 300px;
        top: 160px;
        background-color: purple;
    }
}

#ball.animate {
    animation-name: ballmovement;
}
```


• animation-name: el nombre de la animación que desea aplicar al elemento de destino.

• animation-duration: la duración de la animación.

• animation-delay: Un retraso opcional que ocurre antes de que comience la animación.

• animation-timing-function: información opcional sobre cómo progresa la animación durante un ciclo. Los valores posibles incluyen "lineal", "ease", "ease in", "ease out" y "ease-in-outl". El valor predeterminado es "easy". Puede definir esta propiedad para toda la animación, o solo para pasos específicos en la definición de animación @keyframe.

• animation-iteration-count: recuento de iteraciones opcional. El valor predeterminado es 1.

• animation-direction: información opcional sobre la dirección en la que debe reproducirse la animación. El valor predeterminado es normal, lo que significa que la animación siempre se reproduce en la dirección de avance de principio a fin. El otro valor posible es alternate, lo que significa que la animación se invierte cada vez que se reproduce si el recuento de iteraciones es superior a 1.

```csss
#ball.animate {
    animation-name: ballmovement;
    animation-duration: 10s;
    animation-delay: 3s;
    animation-timing-function: linear;
    animation-iteration-count: 2;
    animation-direction: alternate;
}
```

```html
<style>
    ...
    @keyframes ballmovement {
        ...
    }
  
    #ball.animate {
        animation-name: ballmovement;
        ...
    }
</style>
...
<script>
    function startAnimation() {
        const ball = document.getElementById("ball");
        ball.classList.add("animate");
    }
</script>
...
<body>
    ...
    <div id="ball"></div>
    <button id="button" onclick="startAnimation()">Start Animation</button>
    ...
</body>
```

eventos 
animationstart
animationiteration
animationend

e.animationName
e.elapsedTime