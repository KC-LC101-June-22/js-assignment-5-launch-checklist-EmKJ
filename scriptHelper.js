// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById('missionTarget');
   // Here is the HTML formatting for our mission target div.
//    missionTarget.innerHTML = `        <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: </li>
//                     <li>Diameter: </li>
//                     <li>Star: ${star}</li>
//                     <li>Distance from Earth: </li>
//                     <li>Number of Moons: </li>
//                 </ol>
//                 <img src="">
//    `
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
        if(validateInput(pilot.value) !== "Not a Number" ||validateInput(copilot.value) !== "Not a Number" || validateInput(fuelLevel.value) !== "Is a Number" || validateInput(cargoLevel.value) !== "Is a Number"){
            alert("please enter valid info")
            return "submit aborted";
        } else {
            let readyStatus= "yes";
            //default successful form:
            //Exceptions
            if(fuelLevel.value<10000){
                list.style.visibility = "visible";
                fuelLi.innerHTML = `Fuel level too low for launch`;
                h2.style.color = "red";
                h2.innerHTML = `Shuttle not ready for launch`;
                readyStatus="no";
                alert("not enough fuel!");
            };
            if(cargoLevel.value>10000){
                list.style.visibility = "visible";
                cargoLi.innerHTML = `Cargo mass too heavy for launch`;
                h2.style.color = "red";
                h2.innerHTML = `Shuttle not ready for launch`;
                readyStatus="no";
                alert("too heavy!");
            };
            if(readyStatus==="yes"){
                h2.style.color = "green";
                h2.innerHTML = `Shuttle is ready for launch`;
                pilotLi.innerHTML = `Pilot ${pilot.value} is ready for launch`;
                copilotLi.innerHTML = `Pilot ${copilot.value} is ready for launch`;
                list.style.visibility = "hidden";
                alert("LIFT OFF!");
            };console.log(readyStatus);
        };
    }

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
