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

      // Checks/Alerts for null/undefined entries
      for ( let i = 0; i < submissionArr.length; i++ ) { 

         if ( !submissionArr[i].value ) {
            alert ( "ALL FIELDS ARE REQUIRED" );
         };

      };


      //If-statement block validates/alerts that pilot/copilot names must be strings
      if( !isNaN(pilotName.value) ) { 

         alert ( "Pilot Name: INVALID VALUE!" );

      } else if( !isNaN(copilotName.value) ) {

         alert ( "Co-pilot Name: INVALID VALUE!" );

      };

      //If-Statement block validates/alerts that fuelLevel/cargoMass must be numbers
      if( isNaN(fuelLevel.value) ) { 

         alert ( "Fuel Level: INVALID VALUE!" );

      } else if ( isNaN(cargoMass.value) ) {

         alert ( "Cargo Mass: INVALID VALUE!" );

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

         document.querySelector("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";

         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
         document.getElementById("launchStatus").style.color = "red";

      } else {

         document.getElementById("launchStatus").innerHTML = "Shuttle Is Ready for Launch"
         document.getElementById("launchStatus").style.color = 'green';

      };

      









   });


});