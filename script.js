// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {

   let form = document.getElementById("launchForm");

   form.addEventListener("submit", function(event) {

      event.preventDefault(); //Prevents window from refreshing upon submit event

      let pilotName = document.getElementById( "pilotName" );
      let copilotName = document.getElementById( "copilotName" );
      let fuelLevel = document.getElementById( "fuelLevel" );
      let cargoMass = document.getElementById( "cargoMass" );
      let submissionArr = [pilotName, copilotName, fuelLevel, cargoMass];

      let pilotStatus = document.querySelector("pilotStatus");
      let copilotStatus = document.querySelector("copilotStatus");
      let fuelStatus = document.querySelector("fuelStatus");
      let cargoStatus = document.querySelector("cargoStatus");
      let launchStatus = document.querySelector("launchStatus");

      let isReady = false;

      // Checks/Alerts for null/undefined entries
      for ( let i = 0; i < submissionArr.length; i++ ) { 

         if ( !submissionArr[i].value ) {

            isReady = false;
            alert ( "ALL FIELDS ARE REQUIRED" );
            break;

         } else isReady = true;

         //If-statement block validates/alerts that pilot/copilot names must be strings
         if( !isNaN(pilotName.value) ) { 

            isReady = false;
            alert ( "Pilot Name: INVALID VALUE!" );
            break;

         } else isReady = true;
         
         if( !isNaN(copilotName.value) ) {

            isReady = false;
            alert ( "Co-pilot Name: INVALID VALUE!" );
            break;

         } else isReady = true;

         //If-Statement block validates/alerts that fuelLevel/cargoMass must be numbers
         if( isNaN(fuelLevel.value) ) { 

            isReady = false;
            alert ( "Fuel Level: INVALID VALUE!" );
            break;

         } else isReady = true;
         
         if ( isNaN(cargoMass.value) ) {

            isReady = false;
            alert ( "Cargo Mass: INVALID VALUE!" );
            break;

         } else isReady = true;

      };

      // Line 66 & 67 update status to include user's name.
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} Ready`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} Ready`;


      //If-Statement block that confirms if shuttle is ready for takeoff
      if ( fuelLevel.value < 10000 ) { 

         faultyItems.style.visibility = "visible";

         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";

         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
         document.getElementById("launchStatus").style.color = "red";

      } else if ( cargoMass.value > 10000 ) {

         faultyItems.style.visibility = "visible";
         faultyItems.style.visibility = "visible";

         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";

         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
         document.getElementById("launchStatus").style.color = "red";

      } else if ( isReady === true) {

         document.getElementById("launchStatus").innerHTML = "Shuttle Is Ready for Launch"
         document.getElementById("launchStatus").style.color = 'green';

         let json = [];
         fetch("https://handlers.education.launchcode.org/static/planets.json")
         .then(response => response.json())
         .then(function(json) {
            const missionTarget = document.getElementById("missionTarget");
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[0].name}</li>
                  <li>Diameter: ${json[0].diameter}</li>
                  <li>Star: ${json[0].star}</li>
                  <li>Distance from Earth: ${json[0].distance}</li>
                  <li>Number of Moons: ${json[0].moons}</li>
               </ol>
            <img src="${json[0].image}">
            `;
         });

      };

   });

});