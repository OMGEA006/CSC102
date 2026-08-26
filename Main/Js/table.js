// Creates an array containing information for the table.
var languages = [
    // Stores information about JavaScript.
    ["JavaScript", "Websites", "Beginner"],

    // Stores information about Python.
    ["Python", "AI and Data", "Beginner"],

    // Stores information about Java.
    ["Java", "Applications", "Intermediate"],

    // Stores information about C++.
    ["C++", "Games", "Advanced"],

    // Stores information about SQL.
    ["SQL", "Databases", "Beginner"]
];

// Finds the table body in the HTML page.
var table = document.getElementById("languageTable");

// Loops through every language in the array.
for (var i = 0; i < languages.length; i++) {

    // Creates a new table row.
    var row = document.createElement("tr");

    // Loops through the information for the current language.
    for (var j = 0; j < languages[i].length; j++) {

        // Creates a new table cell.
        var cell = document.createElement("td");

        // Puts the information into the table cell.
        cell.textContent = languages[i][j];

        // Adds the cell to the current row.
        row.appendChild(cell);
    }

    // Adds the completed row to the table.
    table.appendChild(row);
}