// This function validates all form inputs and reveals the secret message when the information is valid.
function validateAccess() {
    // Gets the first name input box from the HTML page.
    var firstNameInput = document.getElementById("firstName");

    // Gets the last name input box from the HTML page.
    var lastNameInput = document.getElementById("lastName");

    // Gets the ZIP code input box from the HTML page.
    var zipCodeInput = document.getElementById("zipCode");

    // Gets the paragraph used to show validation messages.
    var validationMessage = document.getElementById("validationMessage");

    // Gets the section used to show the secret message.
    var secretMessage = document.getElementById("secretMessage");

    // Stores the first name after removing extra spaces.
    var firstName = firstNameInput.value.trim();

    // Stores the last name after removing extra spaces.
    var lastName = lastNameInput.value.trim();

    // Stores the ZIP code after removing extra spaces.
    var zipCode = zipCodeInput.value.trim();

    // Combines the first name, one space, and the last name into one variable.
    var fullName = firstName + " " + lastName;

    // Clears any old validation message before checking the new input.
    validationMessage.textContent = "";

    // Resets the secret message area before validating the new information.
    secretMessage.innerHTML = "<p>The vault is checking your information...</p>";

    // Checks if either name field is empty.
    if (firstName === "" || lastName === "") {
        // Shows a warning on the webpage instead of using an alert.
        validationMessage.textContent = "Access denied: Please enter both your first and last names.";

        // Resets the secret message area because the information is invalid.
        secretMessage.innerHTML = "<p>The vault remains locked.</p>";

        // Stops the function so the secret message is not displayed.
        return;
    }

    // Checks if the combined full name contains more than 20 characters.
    if (fullName.length > 20) {
        // Shows a warning that includes the current number of characters.
        validationMessage.textContent =
            "Access denied: Your full name contains " +
            fullName.length +
            " characters. The maximum is 20.";

        // Resets the secret message area because the information is invalid.
        secretMessage.innerHTML = "<p>The vault remains locked.</p>";

        // Stops the function so ZIP validation and secret access do not continue.
        return;
    }

    // Calls another function with the ZIP code as a parameter.
    var zipIsValid = validateZipCode(zipCode);

    // Checks if the ZIP code did not pass the validation function.
    if (zipIsValid === false) {
        // Shows a warning on the webpage instead of using an alert.
        validationMessage.textContent =
            "Access denied: The ZIP code must contain exactly five digits.";

        // Resets the secret message area because the information is invalid.
        secretMessage.innerHTML = "<p>The vault remains locked.</p>";

        // Stops the function so the secret message is not displayed.
        return;
    }

    // Shows a successful validation message using textContent.
    validationMessage.textContent = "Identity verified. Secure access granted.";

    // Displays the secret message using innerHTML.
    secretMessage.innerHTML =
        "<p class='success'>Welcome, " +
        fullName +
        "!</p>" +
        "<p>Secret Message: The strongest security begins with careful validation.</p>";
}

// This function takes a ZIP code parameter and returns true only when it contains exactly five digits.
function validateZipCode(zipCode) {
    // Creates a regular expression that requires exactly five numbers from start to finish.
    var fiveDigitPattern = /^\d{5}$/;

    // Tests the ZIP code against the five-digit pattern and returns true or false.
    return fiveDigitPattern.test(zipCode);
}
