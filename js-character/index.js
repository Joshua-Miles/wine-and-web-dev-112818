// Create an HTML img tag
let characterImage = document.createElement('img')
// Set the src attribute
characterImage.src = 'assets/character/static.gif'
// Add the img tag to the body of the page (make it visible)
document.body.append(characterImage)

// Define variables for height and width
let characterHeight = 150
let characterWidth = 100

// Change the styles of the element
characterImage.style.width = characterWidth+'px'
characterImage.style.height = characterHeight+'px'
characterImage.style.position = 'absolute'
characterImage.style.left = "0px"
characterImage.style.bottom = "0px"

// Define a variable to track the characters current directions of motion
let movement = {
    up: 0,
    left: 0,
    down: 0,
    right: 0,
}

// Define a function we can call later
function walkRight(){
    // Change the src of the img tag to match the direction of movement
    characterImage.src = 'assets/character/walkright.gif'
    // Set interval- the code indented below will run every 10 milliseconds.
    // if clearInterval(movement.right) is called, the code will no longer run every 10 milliseconds
    movement.right = setInterval(function(){
        // Get the current space between the left side of the screen and the image.
        // It is a string by default, so we need to parse it into an integer
        let currentPosition = parseInt(characterImage.style.left)
        // Add 1 to the current position
        let newPosition = currentPosition + 1
        // If the new position is not off the page...
        if(newPosition < window.innerWidth - characterWidth){
            // ... move the caracter to its new position
            characterImage.style.left =  newPosition + 'px'
        }
    }, 10) // <- this is where 10 milliseconds comes from
}

function walkLeft(){
    characterImage.src = 'assets/character/walkleft.gif'
    movement.left = setInterval(function(){
        let currentPosition = parseInt(characterImage.style.left)
        let newPosition = currentPosition - 1
        if(newPosition > 0){
            characterImage.style.left = newPosition + 'px'
        }
    }, 10)
}

function walkUp(){
    characterImage.src = 'assets/character/walkup.gif'
    movement.up = setInterval(function(){
        let currentPosition = parseInt(characterImage.style.bottom)
        let newPosition = currentPosition + 1
        if(newPosition < window.innerHeight - characterHeight){
            characterImage.style.bottom =   newPosition + 'px'
        }
    }, 10)
}

function walkDown(){
    characterImage.src = 'assets/character/walkdown.gif'
    movement.down = setInterval(function(){
        let currentPosition = parseInt(characterImage.style.bottom)
        let newPosition = currentPosition -1 
        if(newPosition > 0){
            characterImage.style.bottom =  newPosition + 'px'
        }
    }, 10)
}

// When a key is pressed...
document.addEventListener('keydown', function(event){
   // ...If this event is not repeating...
   if(!event.repeat){
        // ...Choose a direction to walk based on the key that was pressed
        switch(event.key){
            case 'ArrowLeft':
                walkLeft()
            break;
            case 'ArrowRight':
                walkRight()
            break;
            case 'ArrowUp':
                walkUp()
            break;
            case 'ArrowDown':
                walkDown()
            break;
        }
    }
})

// When a key is released...
document.addEventListener('keyup', function(e){
    // ...Stop the characters movement in the direction that the key was released
    switch(e.key){
        case 'ArrowLeft':
            clearInterval(movement.left)
            movement.left = 0
        break;
        case 'ArrowRight':
            clearInterval(movement.right)
            movement.right = 0
        break;
        case 'ArrowUp':
            clearInterval(movement.up)
            movement.up = 0
        break;
        case 'ArrowDown':
            clearInterval(movement.down)
            movement.down = 0
        break;
    }
    // If the character is no longer moving in any direction...
    if( !movement.left &&  !movement.right && !movement.up && !movement.down){
        // ...Set the src of the charactes image to a character which is standing still
        characterImage.src = 'assets/character/static.gif'
    }
})