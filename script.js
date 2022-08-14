// Write your JavaScript code here!
window.addEventListener("load", function() {
    console.log("hello world");
    
    let form = document.querySelector('form');
    let list = document.getElementById('faultyItems');
    list.style.visibility ='hidden';
    form.addEventListener('submit',function(e){
        let pilotName = document.querySelector('input[name=pilotName]');
        let copilotName = document.querySelector('input[name=copilotName]');
        let fuelLevel = document.querySelector('input[name=fuelLevel]');
        let cargoMass = document.querySelector('input[name=cargoMass]');
        e.preventDefault();
        if(pilotName.value === "" || copilotName.value === "" ||fuelLevel.value === "" ||cargoMass.value === "") {
            alert("Missing input: All fields required!")
        }else{
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass)
        }
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       randomPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)
   })  
});