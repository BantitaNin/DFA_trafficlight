const carForm = document.getElementById("car-form");

carForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Collect the selected lanes from the checkboxes
    const selectedLanes = [];
    for (let i = 1; i <= 6; i++) {
        const showCarCheckbox = document.getElementById(`lane${i}`);
        if (showCarCheckbox.checked) {
            selectedLanes.push(i.toString());
        }
    }

    // Check if any lanes are selected
    if (selectedLanes.length === 0) {
        alert("Please select at least one lane.");
        return;
    }

    // Join the selected lanes into a string
    const inputString = selectedLanes.join("");
    updateTrafficLightsForInputNumbers(selectedLanes);
    // Use the isAccepted function to check if the input is valid
    const result = isAccepted(inputString);
    if (selectedLanes.length === 0) {
      alert("Please select at least one lane.");
      return;
  }
    // Display the result
    console.log(result);
    if (result === "True: สามารถใช้งานพร้อมกันได้") {
      // Display the cars for selected lanes
      for (let i = 1; i <= 6; i++) {
          const car = document.getElementById(`car${i}`);
          // Check if the lane is selected, and display the corresponding car
          if (selectedLanes.includes(i.toString())) {
              console.log(i);
              car.style.display = "block";
          } else {
              car.style.display = "none"; // Hide unselected cars
          }
      }
  } else {
      // Hide all cars if it's false
      for (let i = 1; i <= 6; i++) {
          const car = document.getElementById(`car${i}`);
          car.style.display = "none";
      }
  }
  
});

function isAccepted(inputString) {
  


  const dfa = {
    "Qs": { "1": "G1", "2": "G2", "3": "G3", "4": "G4", "5": "G5", "6": "G6" },
    "G1": { "2": "G1_2", "3": "G1_3", "4": "G1_4", "5": "G1_5", "1": "E", "6": "E" },
    "G1_2": { "5": "G1_2_5", "1": "E", "2": "E", "3": "E", "4": "E", "6": "E" },
    "G1_3": { "4": "G1_3_4", "1": "E", "2": "E", "3": "E", "5": "E", "6": "E" },
    "G1_4": { "5": "G1_4_5", "1": "E", "2": "E", "3": "E", "4": "E", "6": "E" },
    "G1_5": { "1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E" },
    "G1_2_5": { "1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E" },
    "G1_3_4": { "1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E" },
    "G1_4_5": { "1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E" },
    "G2": { "5": "G2_5", "1": "E", "2": "E", "3": "E", "4": "E", "6": "E" },
    "G2_5": { "1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E" },
    "G3": { "4": "G3_4", "1": "E", "2": "E", "3": "E", "5": "E", "6": "E" },
    "G3_4": { "1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E" },
    "G4": { "5": "G4_5", "6": "G4_6", "1": "E", "2": "E", "3": "E", "4": "E" },
    "G4_5": { "6": "G4_5_6", "1": "E", "2": "E", "3": "E", "4": "E", "5": "E" },
    "G4_6": { "1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E" },
    "G4_5_6": { "1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E" },
    "G5": { "6": "G5_6", "1": "E", "2": "E", "3": "E", "4": "E", "5": "E" },
    "G5_6": { "1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E" },
    "G6": { "1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E" },
    "E": { "1": "E", "2": "E", "3": "E", "4": "E", "5": "E", "6": "E" }
};

  let current_state = "Qs";

  for (let i = 0; i < inputString.length; i++) {
      const symbol = inputString[i];
      const next_state = dfa[current_state][symbol];

      if (next_state === undefined || next_state === "E") {
          return `False: มีเลนที่ไม่สามารถใช้งานร่วมกันได้: ${symbol}`;
      }

      current_state = next_state;
  }

  if (current_state === "Qs" || current_state === "E") {
      return "False: ไม่มีการเลือกเลนหรือเลนที่เลือกไม่สอดคล้องกับกฎ";
  }

  return "True: สามารถใช้งานพร้อมกันได้";
}


// Add more test cases as needed



      // Define traffic light states and durations
const trafficLightStates = ["red", "yellow", "green"];
const durations = [5000, 1000, 4000]; // Durations for red, yellow, and green in milliseconds

// Define the traffic light configurations
const trafficLights = [
  {
    red: document.getElementById("redLight1"),
    yellow: document.getElementById("yellowLight1"),
    green: document.getElementById("greenLight1"),
  },
  {
    red: document.getElementById("redLight2"),
    yellow: document.getElementById("yellowLight2"),
    green: document.getElementById("greenLight2"),
  },
  {
    red: document.getElementById("redLight3"),
    yellow: document.getElementById("yellowLight3"),
    green: document.getElementById("greenLight3"),
  },
  {
    red: document.getElementById("redLight4"),
    yellow: document.getElementById("yellowLight4"),
    green: document.getElementById("greenLight4"),
  },
  {
    red: document.getElementById("redLight5"),
    yellow: document.getElementById("yellowLight5"),
    green: document.getElementById("greenLight5"),
  },
  {
    red: document.getElementById("redLight6"),
    yellow: document.getElementById("yellowLight6"),
    green: document.getElementById("greenLight6"),
  },
];

// Initialize traffic light states and timers with different starting indices
const trafficLightStatesIndexes = [2, 2, 1, 0, 1, 2];// Example: Starts at red for the first light, yellow for the second, and green for the third
const trafficLightTimers = new Array(trafficLights.length);
function updateTrafficLightsForInputNumbers(inputNumbers) {
  resetTrafficLights(); // Reset all lights to red
  for (const number of inputNumbers) {
    // Check if the input number is valid (between 1 and 6)
    if (number >= 1 && number <= 6) {
      // Set the green light for the selected lane
      trafficLights[number - 1]["green"].style.backgroundColor = "green";
    }
  }
}

// Function to reset all traffic lights to red
function resetTrafficLights() {
  for (const trafficLight of trafficLights) {
    for (const key of Object.keys(trafficLight)) {
      trafficLight[key].style.backgroundColor = "Grey";
    }
  }
}
// Function to update traffic light state
function updateTrafficLight(index) {
  const stateIndex = trafficLightStatesIndexes[index];
  const nextStateIndex = (stateIndex + 1) % trafficLightStates.length;
  const currentState = trafficLightStates[stateIndex];
  const nextState = trafficLightStates[nextStateIndex];

  // Reset all lights to gray
  for (const key of Object.keys(trafficLights[index])) {
    trafficLights[index][key].style.backgroundColor = "gray";
  }

  // Set the next state
  trafficLights[index][nextState].style.backgroundColor = nextState;

  // Update the state index
  trafficLightStatesIndexes[index] = nextStateIndex;

  // Schedule the next update
  trafficLightTimers[index] = setTimeout(() => {
    updateTrafficLight(index);
  }, durations[nextStateIndex]);
}

// Initialize and start the traffic light cycles
for (let i = 0; i < trafficLights.length; i++) {
  updateTrafficLight(i);
}


const car1 = document.getElementById("car1");
const car2 = document.getElementById("car2");
const car3 = document.getElementById("car3");

const car4 = document.getElementById("car4");
const car5 = document.getElementById("car5");
const car6 = document.getElementById("car6");



// Function to check if trafficlight1 is green
function isTrafficLight1Green() {
  const greenLight1 = document.getElementById("greenLight1");
  return getComputedStyle(greenLight1).backgroundColor === "rgb(0, 128, 0)";
}

function isTrafficLight2Green() {
  const greenLight2 = document.getElementById("greenLight2");
  return getComputedStyle(greenLight2).backgroundColor === "rgb(0, 128, 0)";
}
function isTrafficLight3Green() {
  const greenLight3 = document.getElementById("greenLight3");
  return getComputedStyle(greenLight3).backgroundColor === "rgb(0, 128, 0)";
}

function isTrafficLight4Green() {
  const greenLight4 = document.getElementById("greenLight4");
  return getComputedStyle(greenLight4).backgroundColor === "rgb(0, 128, 0)";
}
function isTrafficLight5Green() {
  const greenLight5 = document.getElementById("greenLight5");
  return getComputedStyle(greenLight5).backgroundColor === "rgb(0, 128, 0)";
}
function isTrafficLight6Green() {
  const greenLight6 = document.getElementById("greenLight6");
  return getComputedStyle(greenLight6).backgroundColor === "rgb(0, 128, 0)";
}
function moveCar1() {
  let currentPosition = 10; // Start at the bottom of the screen
  car1.style.marginBottom = currentPosition + "px";

  function animateCar() {
    // Check if trafficlight1 is green before moving the car
    if (isTrafficLight1Green() || currentPosition >= 150 || currentPosition <= 100) {
      currentPosition += 20; // Move the car up
      car1.style.marginBottom = currentPosition + "px";

      if (currentPosition >= 3000) {
        currentPosition = 10; // Stop the animation when the car reaches the top
        car1.style.marginBottom = currentPosition + "px";
      }
    }

    requestAnimationFrame(animateCar); // Continue the animation
  }

  animateCar(); // Start the animation
}
function moveCar2() {
  let currentPosition = 10; // Start at the bottom of the screen
  car2.style.marginBottom = currentPosition + "px";
  car2.style.marginLeft = "0"; // Initial horizontal position

  const screenHeight = window.innerHeight; // Get the screen height

  let rotationAngle = -90;
  function animateCar() {
    // Check if trafficlight1 is green before moving the car
    if (isTrafficLight2Green() || currentPosition >= 150 || currentPosition <= 100) {
      currentPosition += 20; // Move the car up (responsive to screen size)
      car2.style.marginBottom = currentPosition + "px";

      if (currentPosition >= 0.75 * screenHeight) {
        currentPosition = 10; // Stop the animation when the car reaches the top
      } else if (currentPosition >= 0.54 * screenHeight) {
        // Adjust the rotation angle
        car2.style.transform = `rotate(${0}deg)`;
        currentPosition = 0.54 * screenHeight;
        let currentLeft = parseFloat(car2.style.marginLeft || "0");
        currentLeft +=20; // Move the car to the right (responsive to screen size)
        car2.style.marginLeft = currentLeft + "px";
        if (currentLeft >= 0.725 * screenHeight) {
          currentPosition = 10;
          car2.style.marginLeft = "0"; 
          car2.style.marginBottom = currentPosition + "px";
          car2.style.transform = `rotate(${-90}deg)`;
        }
      }
    }

    requestAnimationFrame(animateCar); // Continue the animation
  }

  animateCar(); // Start the animation
}
function moveCar3() {
  let currentPosition = 10; // Start at the bottom of the screen
  car3.style.marginTop= currentPosition + "px";

  function animateCar() {
    // Check if trafficlight1 is green before moving the car
    if (isTrafficLight3Green() || currentPosition >= 80 || currentPosition <= 3) {
      currentPosition += 20; // Move the car up
      car3.style.marginTop = currentPosition + "px";

      if (currentPosition >= 2500) {
        currentPosition = 10; // Stop the animation when the car reaches the top
        car3.style.marginTop = currentPosition + "px";
       

      }
    }

    requestAnimationFrame(animateCar); // Continue the animation
  }

  animateCar(); // Start the animation
}
function moveCar4() {
  let currentPosition = 1; // Start at the bottom of the screen
  car4.style.marginTop= currentPosition + "px";
    
  function animateCar() {
    // Check if trafficlight1 is green before moving the car
    if (isTrafficLight4Green() || currentPosition >= 80 || currentPosition <= 3) {
      currentPosition += 5; // Move the car up
      car4.style.marginTop = currentPosition + "px";

      if (currentPosition >= 150) {
        currentPosition = 150; // Stop the animation when the car reaches the top
        
        car4.style.transform= `rotate(${0}deg)`;
        let currentLeft = parseFloat(car4.style.marginLeft || "0");
        currentLeft +=5;
        car4.style.marginLeft = currentLeft + "px";
        if(currentLeft >= 800){
            currentLeft = 0;
            currentPosition = 0;
            car4.style.marginTop = currentPosition + "px";
            car4.style.marginLeft = currentLeft + "px";
            car4.style.transform= `rotate(${90}deg)`;
        }
      }
      

    }

    requestAnimationFrame(animateCar); // Continue the animation
  }

  animateCar(); // Start the animation
}

function moveCar5() {
  let currentPosition = 10; // Start at the bottom of the screen
  car5.style.marginRight= currentPosition + "px";
  let currenttop = 0;
  function animateCar() {
    // Check if trafficlight1 is green before moving the car
    if (isTrafficLight5Green() || currentPosition>=300 || currentPosition <=200 ) {
      currentPosition += 5; // Move the car up
      car5.style.marginRight = currentPosition + "px";

      if (currentPosition >= 300) {
        currentPosition = 300; // Stop the animation when the car reaches the top
        car5.style.transform =`rotate(${90}deg)`;
      
        currenttop-=5;
        car5.style.marginBottom = currenttop + "px";
        if (currenttop <= -300){
          car5.style.transform =`rotate(${180}deg)`;

          currentPosition = 10;
          car5.style.marginRight= currentPosition + "px";
          currenttop = 0;
          car5.style.marginBottom = currenttop + "px";
        }
      }
      

    }

    requestAnimationFrame(animateCar); // Continue the animation
  }

  animateCar(); // Start the animation
}

function moveCar6() {
  let currentPosition = 10; // Start at the bottom of the screen
  car6.style.marginRight= currentPosition + "px";
  let currenttop = 0;
  function animateCar() {
    // Check if trafficlight1 is green before moving the car
    if (isTrafficLight6Green() || currentPosition>=300 || currentPosition <=200 ) {
      currentPosition += 20; // Move the car up
      car6.style.marginRight = currentPosition + "px";

      if (currentPosition >= 800) {
        currentPosition = 800; // Stop the animation when the car reaches the top
        car6.style.transform =`rotate(${-90}deg)`;
      
        currenttop+=20;
        car6.style.marginBottom = currenttop + "px";
        if (currenttop >= 3000){
          car6.style.transform =`rotate(${180}deg)`;

          currentPosition = 10;
          car6.style.marginRight= currentPosition + "px";
          currenttop = 0;
          car6.style.marginBottom = currenttop + "px";
        }
      }
      

    }

    requestAnimationFrame(animateCar); // Continue the animation
  }

  animateCar(); // Start the animation
}
// Start the car movement
moveCar1();
moveCar2();
moveCar3();
moveCar4();     
moveCar5(); 
moveCar6();