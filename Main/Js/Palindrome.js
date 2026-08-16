
// This function checks if the user's word or phrase is a palindrome.
function checkPalindrome() {
    // Gets the sound from the HTML page.
    var backgroundSound = document.getElementById("us-lab-background");



    // Gets the text box.
    var userStringInput = document.getElementById("userString");

    // Gets the validation message area.
    var validationMessage = document.getElementById("validationMessage");

    // Gets the result area.
    var palindromeResult = document.getElementById("palindromeResult");

    // Gets the text the user entered.
    var originalString = userStringInput.value.trim();

    // Clears the old validation message.
    validationMessage.innerHTML = "";

    // Checks if the text box is empty.
    if (originalString === "") {
        // Shows a validation message using innerHTML.
        validationMessage.innerHTML = "Please enter a word or phrase.";

        // Resets the result area.
        palindromeResult.innerHTML = "<p>No result yet.</p>";

        // Stops the function.
        return;
    }

    // Calls another function to prepare the string.
    var cleanedString = prepareString(originalString);

    // Turns the string into an array.
    var letters = cleanedString.split("");

    // Reverses the array.
    letters.reverse();

    // Joins the array back into a string.
    var reversedString = letters.join("");

    // Checks if both strings are the same.
    if (cleanedString === reversedString) {
        // Shows the palindrome message using innerHTML.
        palindromeResult.innerHTML =
            "<p class='success'>Yes! This is a palindrome.</p>" +
            "<p>" + originalString + "</p>";
    }

    // Runs if the strings are not the same.
    else {
        // Shows the non-palindrome message using innerHTML.
        palindromeResult.innerHTML =
            "<p class='notPalindrome'>No, this is not a palindrome.</p>" +
            "<p>" + originalString + "</p>";
    }
    // Plays the sound if it is not already playing.
    if (backgroundSound.paused) {
    // Starts the sound.
        backgroundSound.play();
    }
}

// This function removes spaces and changes the text to lowercase.
function prepareString(text) {
    // Changes the text to lowercase.
    var lowerText = text.toLowerCase();

    // Removes all spaces.
    var noSpaces = lowerText.replace(/\\s/g, "");

    // Returns the cleaned text.
    return noSpaces;
}
