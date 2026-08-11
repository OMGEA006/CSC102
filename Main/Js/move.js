// Stores the timer used to move the meme.
var movementTimer = null;

// This function starts the meme movement.
function startMemeMovement() {
    // Gets the Start button.
    var startButton = document.getElementById("startButton");

    // Gets the Stop button.
    var stopButton = document.getElementById("stopButton");

    // Gets the status message.
    var statusMessage = document.getElementById("statusMessage");

    // Disables the Start button.
    startButton.disabled = true;

    // Enables the Stop button.
    stopButton.disabled = false;

    // Shows a message on the page.
    statusMessage.innerHTML = "The meme is moving!";

    // Starts moving the meme every half second.
    movementTimer = setInterval(moveMeme, 500);
}

// This function stops the meme movement.
function stopMemeMovement() {
    // Gets the Start button.
    var startButton = document.getElementById("startButton");

    // Gets the Stop button.
    var stopButton = document.getElementById("stopButton");

    // Gets the status message.
    var statusMessage = document.getElementById("statusMessage");

    // Stops the movement timer.
    clearInterval(movementTimer);

    // Enables the Start button.
    startButton.disabled = false;

    // Disables the Stop button.
    stopButton.disabled = true;

    // Shows a message on the page.
    statusMessage.innerHTML = "The meme has stopped.";
}

// This function moves the meme to a random location.
function moveMeme() {
    // Gets the meme image.
    var memeImage = document.getElementById("memeImage");

    // Gets the movement area.
    var movementArea = document.getElementById("movementArea");

    // Calculates the maximum horizontal position.
    var maxX = movementArea.clientWidth - memeImage.offsetWidth;

    // Calculates the maximum vertical position.
    var maxY = movementArea.clientHeight - memeImage.offsetHeight;

    // Creates a random horizontal position.
    var randomX = Math.floor(Math.random() * maxX);

    // Creates a random vertical position.
    var randomY = Math.floor(Math.random() * maxY);

    // Moves the image horizontally.
    memeImage.style.left = randomX + "px";

    // Moves the image vertically.
    memeImage.style.top = randomY + "px";
}