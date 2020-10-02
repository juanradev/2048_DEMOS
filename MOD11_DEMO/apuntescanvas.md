
 ### api canvas
 
 enable a bitmap area para dibujar 
 simple, pero no es tratada por el DOM (es un caja negra)
 

 
 ```html
  <!--- Create canvas --->
 <canvas id=mycanvas"> Oh tun navegador no rula canvas </canvas>
 ```
 ````css
 /* define style*/
 canvas { border:....
		  background:....
		  }
````

y dibuja con javascript
```javascript
<script>
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
   
    context.fillStyle = "red";
    context.fillRect(20, 20, canvas.width - 40, canvas.height - 40);
</script>
```

esto dibuja un triangulo

```javascript		  
		<canvas id="myCanvas">
    Sorry, your browser does not support canvas.
</canvas>
   
<script>
      // Get the canvas element and its drawing context.
      const canvas = document.getElementById('myCanvas');
      const context = canvas.getContext('2d');   /// 2d 
   
      // Clear any existing content in the canvas.
      context.clearRect(0, 0, canvas.width, canvas.height);  // borra 
   
      // Set the stroke color and the fill color.
      context.strokeStyle = "rgb(0, 0, 255)";
      context.fillStyle = "rgba(255, 0, 0, 0.75)";
   
      // Create a path in absolute coordinates.
      context.beginPath();
      context.moveTo(60, 30);
      context.lineTo(100, 90);
      context.lineTo(20, 90);
   
      // Close the path.
      context.closePath();
   
      // Draw the path as a stroked shape;
      context.stroke();
      
      // Draw the path as a filled shape.
      context.fill();
</script>  
```

ejemplo para dibujar varias formas y darles gradiantes y pattern

```javascript
<script>
      
        // Get the canvas element and its drawing context.
        const canvas = document.getElementById('myCanvas');
        const context = canvas.getContext('2d');
        context.lineWidth = 5;
      
        demoLinearGradient();
        demoRadialGradient();
        demoPattern();
      
        function demoLinearGradient() 
        {
          const linearGradient = context.createLinearGradient(0, 0, 0, canvas.height);
          linearGradient.addColorStop(0, "red");
          linearGradient.addColorStop(0.4, "yellow");
          linearGradient.addColorStop(1, "green");
      
          drawShapes(linearGradient);
        }
      
        function demoRadialGradient() 
        {
          const radialGradient = context.createRadialGradient(canvas.width/2, canvas.height/2, 10, canvas.width/2, canvas.height/2, 100);
          radialGradient.addColorStop(0, "red");
          radialGradient.addColorStop(0.4, "yellow");
          radialGradient.addColorStop(1, "green");
          drawShapes(radialGradient);
        }
      
        function demoPattern() 
        {
          const image = document.getElementById("wales");
          const pattern = context.createPattern(image, "repeat");
          drawShapes(pattern);
        }
      
        function drawShapes(theStyle) 
        {
          // Clear any existing content in the canvas.
          context.clearRect(0, 0, canvas.width, canvas.height);
      
          // Draw a filled triangle, using the specified style.
          context.fillStyle = theStyle;
          context.strokeStyle = "rgb(200, 200, 200)";
          context.beginPath();
          context.moveTo(70, 30);
          context.lineTo(130, 140);
          context.lineTo(10, 140);
          context.closePath();
          context.fill();
          context.stroke();
      
          // Draw a stroked circle, still using the specified style.
          context.beginPath();
          context.arc(canvas.width/2, canvas.height/2, 50, 0, 2*Math.PI);
          context.fill();
      
          // Draw a stroked triangle, using the specified style.
          context.fillStyle = "rgb(200, 0, 200)";
          context.strokeStyle = theStyle;
          context.beginPath();
          context.moveTo(230, 30);
          context.lineTo(290, 140);
          context.lineTo(170, 140);
          context.closePath();
          context.fill();
          context.stroke();
        }
      
    </script>
````


se le aplica tambien tranfromaciones

•rotate(angle): Rotates the coordinate system by the specified angle clockwise in radians.

•translate(dx, dy): Translates the coordinate system by the specified distance in the X and Y directions.

•scale(sx, sy): Scales the coordinate system by the specified fraction in the X and Y directions.

•transform(scaleX, skewX, scaleY, skewY, translateX, translateY): Adjusts the current transformation matrix to perform scaling, skewing, and translation.

•setTransform(scaleX, skewX, scaleY, skewY, translateX, translateY): Sets a new transformation matrix to perform scaling, skewing, and translation.