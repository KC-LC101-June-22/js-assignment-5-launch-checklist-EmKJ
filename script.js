// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector('form');
    let list = document.getElementById('faultyItems');
    
    list.style.visibility ='hidden';
    
    form.addEventListener('submit',function(e){
        let pilotName = document.querySelector('input[name=pilotName]');
        let copilotName = document.querySelector('input[name=copilotName]');
        let fuelLevel = document.querySelector('input[name=fuelLevel]');
        let cargoMass = document.querySelector('input[name=cargoMass]');
        e.preventDefault();
        formSubmission(window.document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
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
       let randomPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)
   })  
});