# Create a Game Character with JavaScript

## Vocabulary

* Concepts
  * HTML / The DOM
  * CSS / `.style` 
  * JavaScript
* Tools
  * `let`/`const`
  * `document.createElement`
  * `document.body.append`
  * `element`
    * `.src`
    * `.style`
      * `.width`
      * `.position`
      * `.left`
      * `.bottom`
  * `setInterval`
  * `function`
  * `clearInterval`
  * `document.addEventListener`
  * `e`
    * `.key`
    * `.repeat`
  * `switch`



## Deliverables

* Make a character which is 

  * Visible

  * Moveable

  * Controllable

  * Reuseable



## Outline

* Introduction

  * The browser as a rendering layer 
    * The browser understands configurable **HTML** tags
    * Which can be styled with **CSS**
    * We can dynamically generate HTML and CSS using **JavaScript**

* Visible 

  * We're going to get something on the screen in 3 steps:
    * Create an empty element (using **`document.createElement`**)
    * Set the path of the image on the element (using **`element.src`**)
    * Add the element to the page (using **`document.body.append`**)
  * Digging deeper:
    * Working 
    * We are using JavaScript to create an HTML element!
  * Let's make him bigger (using **`element.styles.width`**)
  * Position him bottom left  (using **`element.styles.position`**, and  **`element.styles.left/bottom`** )
  * Digging deeper
    * We are using JavaScript to add CSS to HTML elements!
  * Let's move our code to the script file

* Moveable

  * We're going to make him move in 3 steps:
    * Define code that will run at discrete intervals (using **`setInterval`**)
    * Change the position of the character (what tools can we use to change the elements position?)
    * Change the image path for the html element (what method can we use to change the image path for the element?)
  * Let's make it work on command  (using **`function`**)
  * Let's add a method to stop the character (using **`clearInterval`**)

* Controllable

  * We're going to make the character controllable in 3 steps:
    * Define code that will run when an arrow key is pressed (using **`document.addEventListener`**)
    * Determine which arrow key was pressed (using **`e.key`**)
    * Tell the computer to move the character accordingly (using **`switch`** and  **`e.repeat`** )
  * Let's have him stop when a key is released (how could we do this?)
  * Let's keep him from moving in different directions at the same time (how could we do this?)

* Conclusion
  * Questions