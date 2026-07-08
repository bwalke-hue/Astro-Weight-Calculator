// Write your JavaScript code here!

var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

// Populate the dropdown
planets.forEach(function (planet) {
    var option = document.createElement("option");
    option.value = planet[0];
    option.textContent = planet[0];
    document.getElementById("planets").appendChild(option);
});

// Calculate the new weight
function calculateWeight(weight, planetName) {
    var multiplier = 1;

    planets.forEach(function (planet) {
        if (planet[0] === planetName) {
            multiplier = planet[1];
        }
    });

    return Number(weight) * multiplier;
}

// Handle button click
function handleClickEvent() {
    var userWeight = document.getElementById("user-weight").value;
    var planetName = document.getElementById("planets").value;
    var result = calculateWeight(userWeight, planetName);

    document.getElementById("output").textContent =
        "If you were on " +
        planetName +
        ", you would weigh " +
        result.toFixed(2) +
        "lbs!";
}

// Attach click event
document.getElementById("calculate-button").onclick = handleClickEvent;