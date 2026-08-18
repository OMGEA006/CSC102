// This function validates the input and displays the student's results.
function checkScores() {
    // Gets the student name input.
    var nameInput = document.getElementById("studentName");

    // Gets the first score input.
    var score1Input = document.getElementById("score1");

    // Gets the second score input.
    var score2Input = document.getElementById("score2");

    // Gets the third score input.
    var score3Input = document.getElementById("score3");

    // Gets the validation message area.
    var validationMessage = document.getElementById("validationMessage");

    // Gets the results area.
    var resultArea = document.getElementById("resultArea");

    // Removes extra spaces from the name.
    var studentName = nameInput.value.trim();

    // Converts the first score to a number.
    var score1 = Number(score1Input.value);

    // Converts the second score to a number.
    var score2 = Number(score2Input.value);

    // Converts the third score to a number.
    var score3 = Number(score3Input.value);

    // Clears the old validation message.
    validationMessage.innerHTML = "";

    // Checks if the name is blank.
    if (studentName === "") {
        // Shows a validation message.
        validationMessage.innerHTML = "Please enter your name.";

        // Stops the function.
        return;
    }

    // Checks if the name is too short.
    if (studentName.length < 2) {
        // Shows a validation message.
        validationMessage.innerHTML = "Your name must have at least 2 characters.";

        // Stops the function.
        return;
    }

    // Stores the three scores in an array.
    var scores = [score1, score2, score3];

    // Loops through all scores.
    for (var i = 0; i < scores.length; i++) {
        // Checks if the score is invalid.
        if (isNaN(scores[i]) || scores[i] < 0 || scores[i] > 100) {
            // Shows a validation message.
            validationMessage.innerHTML = "All quiz scores must be from 0 to 100.";

            // Stops the function.
            return;
        }
    }

    // Creates an object to store student information.
    var student = {
        // Stores the formatted student name.
        name: formatName(studentName),

        // Stores the score array.
        quizScores: scores
    };

    // Calls a function to calculate the average.
    var average = calculateAverage(student.quizScores);

    // Calls a function to get a message based on the average.
    var message = getStudyMessage(average);

    // Displays the student results.
    resultArea.innerHTML =
        "<h2>Results</h2>" +
        "<p>Student: " + student.name + "</p>" +
        "<p>Average Score: " + average.toFixed(1) + "</p>" +
        "<p>" + message + "</p>";
}

// This function uses a loop to calculate the average.
function calculateAverage(scores) {
    // Starts the total at zero.
    var total = 0;

    // Loops through every score.
    for (var i = 0; i < scores.length; i++) {
        // Adds each score to the total.
        total = total + scores[i];
    }

    // Calculates the average.
    var average = total / scores.length;

    // Returns the average.
    return average;
}

// This function uses decision logic to return a study message.
function getStudyMessage(average) {
    // Checks for an A average.
    if (average >= 90) {
        // Returns the highest message.
        return "Great job! You are doing excellent.";
    }

    // Checks for a B average.
    else if (average >= 80) {
        // Returns a good message.
        return "Good job! Keep studying.";
    }

    // Checks for a C average.
    else if (average >= 70) {
        // Returns a passing message.
        return "You are passing, but you can improve.";
    }

    // Runs for an average below 70.
    else {
        // Returns a study warning.
        return "You should spend more time studying.";
    }
}

// This function changes the first letter of the name to uppercase.
function formatName(name) {
    // Gets and capitalizes the first letter.
    var firstLetter = name.charAt(0).toUpperCase();

    // Gets the rest of the name and changes it to lowercase.
    var restOfName = name.slice(1).toLowerCase();

    // Combines the two parts.
    var formattedName = firstLetter + restOfName;

    // Returns the formatted name.
    return formattedName;
}
