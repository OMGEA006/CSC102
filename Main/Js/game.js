// This function runs the Quarks Casino craps game when the roll button is clicked.
function playQuarksCraps() {
    // Gets the name input box from the HTML page.
    var playerNameBox = document.getElementById("playerName");

    // Gets the wager input box from the HTML page.
    var chipWagerBox = document.getElementById("chipWager");

    // Gets the validation output area from the HTML page.
    var validationOutput = document.getElementById("validationOutput");

    // Gets the main game output area from the HTML page.
    var gameOutput = document.getElementById("gameOutput");

    // Stores the player's name and removes extra spaces.
    var playerName = playerNameBox.value.trim();

    // Converts the wager input into a number.
    var chipWager = Number(chipWagerBox.value);

    // Clears any old validation message.
    validationOutput.textContent = "";

    // Checks if the player left the name blank.
    if (playerName === "") {
        // Shows a validation message on the page instead of using an alert.
        validationOutput.textContent = "Please enter your casino name.";

        // Stops the game because the input is invalid.
        return;
    }

    // Checks if the wager is not a number or is outside the allowed range.
    if (isNaN(chipWager) || chipWager < 1 || chipWager > 100) {
        // Shows a validation message on the page instead of using an alert.
        validationOutput.textContent = "Please enter a quark chip wager from 1 to 100.";

        // Stops the game because the input is invalid.
        return;
    }

    // Generates the first random die number from 1 to 6.
    var dieOne = Math.floor(Math.random() * 6) + 1;

    // Generates the second random die number from 1 to 6.
    var dieTwo = Math.floor(Math.random() * 6) + 1;

    // Adds the two dice together.
    var diceSum = dieOne + dieTwo;

    // Game state: `currentPoint` stores the point number when established.
    // If null, we're on the come-out roll.
    if (typeof playQuarksCraps.currentPoint === "undefined") {
        playQuarksCraps.currentPoint = null;
    }

    // Creates a variable to store the game result.
    var resultMessage = "";
    // Standard craps rules (come-out roll and point rounds):
    if (playQuarksCraps.currentPoint === null) {
        // Come-out roll
        if (diceSum === 7 || diceSum === 11) {
            resultMessage = "You Lose " + chipWager - " quark chips!";
        } else if (diceSum === 2 || diceSum === 3 || diceSum === 12) {
            resultMessage = "Craps — you lose " + chipWager + " quark chips!";
        } else {
            // Establish point
            playQuarksCraps.currentPoint = diceSum;
            resultMessage = "Point established: " + playQuarksCraps.currentPoint + ". Roll again to hit your point before a 7.";
        }
    } else {
        // Point round: keep rolling until point (win) or 7 (lose)
        if (diceSum === playQuarksCraps.currentPoint) {
            resultMessage = "You hit your point! You win " + chipWager + " quark chips!";
            playQuarksCraps.currentPoint = null; // reset for next game
        } else if (diceSum === 7 || diceSum === 11) {
            resultMessage = "Seven-out — you lose " + chipWager + " quark chips!";
            playQuarksCraps.currentPoint = null; // reset for next game
        } else {
            resultMessage = "No decision. Point is " + playQuarksCraps.currentPoint + ". Roll again.";
        }
    }

    // Calls another function with a parameter to create a player rank message.
    var rankMessage = getPlayerRank(chipWager);

    // Displays all game results on the page using innerHTML.
    gameOutput.innerHTML =
        "<h2>Quantum Roll Complete</h2>" +
        "<p>Player: " + playerName + "</p>" +
        "<p class='dice-line'>🎲 " + dieOne + " + 🎲 " + dieTwo + " = " + diceSum + "</p>" +
        "<p class='outcome'>" + resultMessage + "</p>" +
        "<p>" + rankMessage + "</p>" +
        (playQuarksCraps.currentPoint ? ("<p>Current Point: " + playQuarksCraps.currentPoint + "</p>") : "");
}

// This function takes the wager as a parameter and returns a casino rank message.
function getPlayerRank(wager) {
    // Checks if the wager is 75 or more.
    if (wager >= 75) {
        // Returns a high roller message.
        return "Casino Rank: Quantum High Roller";
    }

    // Checks if the wager is 25 or more.
    else if (wager >= 25) {
        // Returns a regular player message.
        return "Casino Rank: Cosmic Card Shark";
    }

    // Runs when the wager is less than 25.
    else {
        // Returns a beginner rank message.
        return "Casino Rank: Rookie Quark Roller";
    }
}