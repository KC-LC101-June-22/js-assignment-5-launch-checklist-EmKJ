// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById('missionTarget');
//    Here is the HTML formatting for our mission target div.
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
    let result = 
    (testInput === "" || testInput === " ") ?  "Empty" : 
    (isNaN(testInput)? "Not a Number": "Is a Number");
     return result;
   }

   function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
       const pilotLi = document.getElementById('pilotStatus');
       const copilotLi = document.getElementById('copilotStatus');
       const fuelLi = document.getElementById('fuelStatus');
       const cargoLi = document.getElementById('cargoStatus');
       const h2 = document.getElementById('launchStatus');
       //input validation 
        if(validateInput(pilot.value) !== "Not a Number" ||
            validateInput(copilot.value) !== "Not a Number" || 
            validateInput(fuelLevel.value) !== "Is a Number" || 
            validateInput(cargoLevel.value) !== "Is a Number"){
            alert("please enter valid info");
            return "submit aborted";
        } else {
            let readyStatus= "yes";
            //default successful form:
            pilotLi.innerHTML = `Pilot ${pilot.value} is ready for launch`;
            copilotLi.innerHTML = `Pilot ${copilot.value} is ready for launch`;
            //Exceptions
            if(fuelLevel.value<10000){
                list.style.visibility = "visible";
                fuelLi.innerHTML = `Fuel level too low for launch`;
                h2.style.color = "red";
                h2.innerHTML = `Shuttle not ready for launch`;
                readyStatus="no";
                // window.alert("not enough fuel!");
            };
            if(cargoLevel.value>10000){
                list.style.visibility = "visible";
                cargoLi.innerHTML = `Cargo mass too heavy for launch`;
                h2.style.color = "red";
                h2.innerHTML = `Shuttle not ready for launch`;
                readyStatus="no";
                // window.alert("too heavy!");
            };
            if(readyStatus==="yes"){
                list.style.visibility = "hidden";
                h2.style.color = "green";
                h2.innerHTML = `Shuttle is ready for launch`;
                // window.alert("LIFT OFF!");
            };
            //console.log(readyStatus);
        };
    }

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json(planetsReturned);
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    random = Math.floor(Math.random()*planets.length);
    console.log(random);
    return planets[random];
}

module.exports = { addDestinationInfo, validateInput, formSubmission, pickPlanet, myFetch};
