// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById('missionTarget');
   missionTarget.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src=${imageUrl}>`
}

function validateInput(testInput) {
    return (testInput === "" || testInput === " ") ?  "Empty" : 
    (isNaN(testInput)? "Not a Number": "Is a Number");
   }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//input validation 
    let pilotV = validateInput(pilot);
    let copilotV = validateInput(copilot);
    let fuelV = validateInput(fuelLevel);
    let cargoV = validateInput(cargoLevel);
    if(pilotV !== "Not a Number" ||
        copilotV !== "Not a Number" || 
        fuelV !== "Is a Number" || 
        cargoV !== "Is a Number"){
        alert("please enter valid info");
    }
//updates to status div    
    const pilotLi = document.getElementById('pilotStatus');
    const copilotLi = document.getElementById('copilotStatus');
    const fuelLi = document.getElementById('fuelStatus');
    const cargoLi = document.getElementById('cargoStatus');
    const h2 = document.getElementById('launchStatus');

    pilotLi.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotLi.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelLi.innerHTML = `Fuel level high enough for launch`;
    cargoLi.innerHTML = `Cargo mass low enough for launch`;

    let readyStatus= true;
    
    if(fuelLevel<10000){
        fuelLi.innerHTML = `Fuel level too low for launch`;
        readyStatus=false;
    };
    if(cargoLevel>10000){
        cargoLi.innerHTML = `Cargo mass too heavy for launch`;
        readyStatus=false;
    };
    if(readyStatus){
        list.style.visibility = "visible";
        h2.style.color = "rgb(65, 159, 106)";
        h2.innerHTML = `Shuttle is Ready for Launch`;
    }else{
        list.style.visibility = "visible";
        h2.style.color = "rgb(199, 37, 78)";
        h2.innerHTML = `Shuttle Not Ready for Launch`;
    }
};

// Random planet data for top div
async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    let random = Math.floor(Math.random()*planets.length);
    return planets[random];
}

module.exports={ addDestinationInfo, validateInput, formSubmission, pickPlanet, myFetch}
// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;