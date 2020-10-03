
## DEMO 14 WEBWORKERS

Demostracion del funcionamiento de la página speaker-badge.htm



![alt text](./Captura1.PNG "Captura1.PNG") 
![alt text](./Captura2.PNG "Captura2.PNG")

el webworker la transforma a blanco y negro pixel a pixel 
![alt text](./Captura3.PNG "Captura3.PNG") 


revisión de código  grayscale-worker.js

```javascriptavascript
// This script is for a Web Worker.


addEventListener("message", function (event) {
    const imageData = event.data;
    let pixels = imageData.data;
    for (let i = 0; i < pixels.length; i += 4) {
        grayscalePixel(pixels, i);
    }
    postMessage({ done: imageData });
});

function grayscalePixel(pixels, index) {
    /// <summary>Updates the pixel, starting at the given index, to be gray scale.</summary>

    const brightness = 0.34 * pixels[index] + 0.5 * pixels[index + 1] + 0.16 * pixels[index + 2];

    pixels[index] = brightness; // red
    pixels[index + 1] = brightness; // green
    pixels[index + 2] = brightness; // blue
};
```

speakerbadgePage.js

```` javascript 



    handleDrop(event) {
        event.stopPropagation();
        event.preventDefault();

        const files = event.dataTransfer.files;
        if (files.length == 0) return;

        // More than one file could have been dropped, we'll just use the first.
        const file = files[0];
        if (this.isImageType(file.type)) {
            this.busy();
            // TODO: Add grayscaleImage into the processing pipeline.
            this.readFile(file)
                .then((file) => this.loadImage(file)) /*carga la imagen */
                .then((file) => grayscaleImage(file)) /* pasa a grises */
                .then((file) => this.drawBadge(file)) /* dibuja la imagen */
                .then((file) => this.notBusy(file));  /* busyElement.style.display = "block"; */
        } else {
            alert("Please drop an image file.");
        }
    }

	  busy() {
        this.busyElement.style.display = "block";
    }

    notBusy() {
        this.busyElement.style.display = "none";
    }
	/* html
	  <div class="busy">
                    <p>Creating badge. Please wait...</p>
                </div>
	*/
	


export function grayscaleImage(image) {
    // Converts a colour image into gray scale.

    // Return a new promise.
    return new Promise(function (resolve, reject) {   
        const canvas = createCanvas(image);
        const context = canvas.getContext("2d");
        const imageData = getImageData(context, image);

        // TODO: Create a Worker that runs /scripts/grayscale-worker.js
        const worker = new Worker("/scripts/grayscale-worker.js"); 
        const handleMessage = function (event) {
            // Update the canvas with the gray scaled image data.
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.putImageData(event.data.done, 0, 0);

            // Returning a Promise makes this function easy to chain together with other deferred operations.
            // The canvas object is returned as this can be used like an image.
            resolve(canvas);
        };
        worker.addEventListener("message", handleMessage.bind(this));
        worker.postMessage(imageData);                                        
		/* llama al webworket pasandole la imagen y cuando lo retorna pinta de nuevo el canvas*/

       
    });
};
```` 