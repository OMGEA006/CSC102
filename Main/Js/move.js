var movementTimer = null;

// Stores the horizontal position of the meme image.
var memeX = 40;

// Stores the vertical position of the meme image.
var memeY = 40;

// Stores the horizontal movement speed.
var speedX = 6;

// Stores the vertical movement speed.
var speedY = 5;

// This function disables Start, enables Stop, and begins moving the meme.
function startMemeMovement() {
    // Gets the Start button from the HTML page.
    var startButton = document.getElementById("startButton");

    // Gets the Stop button from the HTML page.
    var stopButton = document.getElementById("stopButton");

    // Gets the message paragraph from the HTML page.
    var statusMessage = document.getElementById("statusMessage");

    // Disables the Start button while the meme is already moving.
    startButton.disabled = true;

    // Enables the Stop button so the user can stop the movement.
    stopButton.disabled = false;

    // Displays a message on the webpage using innerHTML.
    statusMessage.innerHTML = "Mission active: the meme is moving!";

    // Calls the separate function that starts the repeating movement.
    beginMovement();
}

// This function enables Start, disables Stop, and stops the meme movement.
function stopMemeMovement() {
    // Gets the Start button from the HTML page.
    var startButton = document.getElementById("startButton");

    // Gets the Stop button from the HTML page.
    var stopButton = document.getElementById("stopButton");

    // Gets the message paragraph from the HTML page.
    var statusMessage = document.getElementById("statusMessage");

    // Enables the Start button so movement can be started again.
    startButton.disabled = false;

    // Disables the Stop button because the meme is no longer moving.
    stopButton.disabled = true;

    // Displays a stopped message on the webpage using innerHTML.
    statusMessage.innerHTML = "Mission paused: the meme has stopped.";

    // Calls the separate function that stops the repeating movement.
    endMovement();
}

// This function starts a timer that repeatedly calls the movement function.
function beginMovement() {
    // Prevents more than one timer from running at the same time.
    if (movementTimer === null) {
        // Calls moveMeme every 30 milliseconds.
        movementTimer = setInterval(moveMeme, 30);
    }
}

// This function stops the timer that moves the meme.
function endMovement() {
    // Checks whether a movement timer is currently running.
    if (movementTimer !== null) {
        // Stops the repeating timer.
        clearInterval(movementTimer);

        // Resets the timer variable so movement can be started again.
        movementTimer = null;
    }
}

// This function changes the meme position and makes it bounce off page edges.
function moveMeme() {
    // Gets the meme image from the HTML page.
    var memeImage = document.getElementById("memeImage");

    // Gets the movement area from the HTML page.
    var movementArea = document.getElementById("movementArea");

    // Calculates the maximum horizontal position inside the movement area.
    var maximumX = movementArea.clientWidth - memeImage.offsetWidth;

    // Calculates the maximum vertical position inside the movement area.
    var maximumY = movementArea.clientHeight - memeImage.offsetHeight;

    // Adds the horizontal speed to the current horizontal position.
    memeX = memeX + speedX;

    // Adds the vertical speed to the current vertical position.
    memeY = memeY + speedY;

    // Checks whether the meme reached the left or right edge.
    if (memeX <= 0 || memeX >= maximumX) {
        // Reverses the horizontal direction.
        speedX = speedX * -1;

        // Keeps the meme inside the valid horizontal area.
        memeX = Math.max(0, Math.min(memeX, maximumX));
    }

    // Checks whether the meme reached the top or bottom edge.
    if (memeY <= 0 || memeY >= maximumY) {
        // Reverses the vertical direction.
        speedY = speedY * -1;

        // Keeps the meme inside the valid vertical area.
        memeY = Math.max(0, Math.min(memeY, maximumY));
    }

    // Applies the new horizontal position to the meme image.
    memeImage.style.left = memeX + "px";

    // Applies the new vertical position to the meme image.
    memeImage.style.top = memeY + "px";
}
