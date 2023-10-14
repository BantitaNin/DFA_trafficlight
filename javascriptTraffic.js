const carForm = document.getElementById("car-form");
const dfapic = document.getElementById("dfapic");

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

  //DFA
  {
  if(selectedLanes.toString() === "1"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //G1
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470439180828792/JPEG-1.jpg?ex=653c0df6&is=652998f6&hm=4a5bf66858c2e49616e71be0753f09ff3824db93e07f43303be02a301549961f&";
    }, 2000);
  }
  else if(selectedLanes.toString() === "1,2"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //2->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162496482520354877/JPEG-1.jpg?ex=653c2637&is=6529b137&hm=fb0a7406be96fa537f31f45f06840b35c72d61d99a2c25c2511c10bd4d58ca95&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162496998046445629/JPEG-1.jpg?ex=653c26b2&is=6529b1b2&hm=b9d2b27346d23140a5a50a0934bf60124870be708e3b6250eacd1e0ef3e8ce02&";
    }, 2500);
    //G1_2
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162638078968598558/JPEG-1.jpg?ex=653caa16&is=652a3516&hm=f5b1512c764ca33a66656d06e27d3471e2439e76ce4739e27304a45911af0ecd&";
    }, 3000);
  }
  else if(selectedLanes.toString() === "1,2,5"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //2->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162496482520354877/JPEG-1.jpg?ex=653c2637&is=6529b137&hm=fb0a7406be96fa537f31f45f06840b35c72d61d99a2c25c2511c10bd4d58ca95&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162496998046445629/JPEG-1.jpg?ex=653c26b2&is=6529b1b2&hm=b9d2b27346d23140a5a50a0934bf60124870be708e3b6250eacd1e0ef3e8ce02&";
    }, 2500);
    //5->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162638402508836944/JPEG-1.jpg?ex=653caa63&is=652a3563&hm=3d8b49af7bb89f5cecee26e9f599fb67e763480c671d80846981e96ebac68337&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162638599024558141/JPEG-1.jpg?ex=653caa92&is=652a3592&hm=d01d0b38c0c1b6af288ca0b0133bc3d82a2c867326a93e7ee09d93983aef9168&";
    }, 3500);
    //G1_2_5
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162638851085447218/JPEG-1.jpg?ex=653caace&is=652a35ce&hm=e683e75899ac0c788382eee1ac590744673d0035e47b4993f8162c5cef54178c&";
    }, 4000);
  }
  else if(selectedLanes.toString().startsWith("1,2,3")){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //2->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162496482520354877/JPEG-1.jpg?ex=653c2637&is=6529b137&hm=fb0a7406be96fa537f31f45f06840b35c72d61d99a2c25c2511c10bd4d58ca95&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162496998046445629/JPEG-1.jpg?ex=653c26b2&is=6529b1b2&hm=b9d2b27346d23140a5a50a0934bf60124870be708e3b6250eacd1e0ef3e8ce02&";
    }, 2500);
    //3->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162708145169240155/JPEG-1.jpg?ex=653ceb57&is=652a7657&hm=9806071fd3037fe7d2f0c5918e223635d6a40e54a0bfc0283417725c943e0e4c&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162708323414581310/JPEG-1.jpg?ex=653ceb82&is=652a7682&hm=ce6e07cb4a4cb45a9579d7bdd7c8503d6420ab44374ef8c735cfa9676c131479&";
    }, 3500);
  }
  else if(selectedLanes.toString().startsWith("1,2,4")){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //2->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162496482520354877/JPEG-1.jpg?ex=653c2637&is=6529b137&hm=fb0a7406be96fa537f31f45f06840b35c72d61d99a2c25c2511c10bd4d58ca95&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162496998046445629/JPEG-1.jpg?ex=653c26b2&is=6529b1b2&hm=b9d2b27346d23140a5a50a0934bf60124870be708e3b6250eacd1e0ef3e8ce02&";
    }, 2500);
    //4->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162708515979264060/JPEG-1.jpg?ex=653cebb0&is=652a76b0&hm=9fb868b9e354c91dde2fccebadcaadbbc2240cb0c9150cdd4fbb32f691ae1df1&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162708602637787136/JPEG-1.jpg?ex=653cebc4&is=652a76c4&hm=b60a230ee357f475c568a9c8ce27f48064137e0bc70d8cf4f0cc220c0d5cd859&";
    }, 3500);
  }
  else if(selectedLanes.toString() === "1,2,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //2->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162496482520354877/JPEG-1.jpg?ex=653c2637&is=6529b137&hm=fb0a7406be96fa537f31f45f06840b35c72d61d99a2c25c2511c10bd4d58ca95&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162496998046445629/JPEG-1.jpg?ex=653c26b2&is=6529b1b2&hm=b9d2b27346d23140a5a50a0934bf60124870be708e3b6250eacd1e0ef3e8ce02&";
    }, 2500);
    //6->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162708678349164554/JPEG-1.jpg?ex=653cebd7&is=652a76d7&hm=c2fb287309f0a5e19b3b07b918952b88df6019d6482a3d73249a6b0b4198e955&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162708776344895669/JPEG-1.jpg?ex=653cebee&is=652a76ee&hm=d2879d5241ddb522cf275009eadee9c0fce326b871ef5d27b5540ad5366b0b81&";
    }, 3500);
  }
  else if(selectedLanes.toString() === "1,2,5,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //2->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162496482520354877/JPEG-1.jpg?ex=653c2637&is=6529b137&hm=fb0a7406be96fa537f31f45f06840b35c72d61d99a2c25c2511c10bd4d58ca95&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162496998046445629/JPEG-1.jpg?ex=653c26b2&is=6529b1b2&hm=b9d2b27346d23140a5a50a0934bf60124870be708e3b6250eacd1e0ef3e8ce02&";
    }, 2500);
    //5->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162638402508836944/JPEG-1.jpg?ex=653caa63&is=652a3563&hm=3d8b49af7bb89f5cecee26e9f599fb67e763480c671d80846981e96ebac68337&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162638599024558141/JPEG-1.jpg?ex=653caa92&is=652a3592&hm=d01d0b38c0c1b6af288ca0b0133bc3d82a2c867326a93e7ee09d93983aef9168&";
    }, 3500);
    //6->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162641625110032425/JPEG-1.jpg?ex=653cad64&is=652a3864&hm=63f3f8abbfcf602077c4a196472efc0e671f935182ca123353960fa34b9062a5&";
    }, 4000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162641709000294460/JPEG-1.jpg?ex=653cad78&is=652a3878&hm=d103c2b2738c3dc762cce6ff4bc5f53290a8d3bca46549defd6ea4b2c065832a&";
    }, 4500);
  }
  else if(selectedLanes.toString() === "1,3"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //3->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162720169257349160/JPEG-1.jpg?ex=653cf68a&is=652a818a&hm=77793e3a00e0103707a89de31d2084f6bd9309e60da20e5bf166a643e17ca1f4&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162720476225871912/JPEG-1.jpg?ex=653cf6d3&is=652a81d3&hm=0249e1bd727945f4dbf6d1ea8471e0fc668be4a537907d6714756b3e7e5f5210&";
    }, 2500);
    //G1_3
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162721087071715400/JPEG-1.jpg?ex=653cf765&is=652a8265&hm=0b0b86d5ac91732b3944b26bcfc102f90ab839a149f0450ee02d8d866e190c86&";
    }, 3000);
  }
  else if(selectedLanes.toString() === "1,3,4"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //3->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162720169257349160/JPEG-1.jpg?ex=653cf68a&is=652a818a&hm=77793e3a00e0103707a89de31d2084f6bd9309e60da20e5bf166a643e17ca1f4&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162720476225871912/JPEG-1.jpg?ex=653cf6d3&is=652a81d3&hm=0249e1bd727945f4dbf6d1ea8471e0fc668be4a537907d6714756b3e7e5f5210&";
    }, 2500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162726841396768858/JPEG-1.jpg?ex=653cfcc1&is=652a87c1&hm=e4bade5e8d0f9315e690b2dd14d6ca9581aaeeac5bc9cb6e173541e348759ccc&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162726953850241044/JPEG-1.jpg?ex=653cfcdc&is=652a87dc&hm=86dbc206c283437109a1168b6631c5c11e7f5d45ff7837bf60262361d2d8795d&";
    }, 3500);
    //G1_3_4
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162727043163766804/JPEG-1.jpg?ex=653cfcf1&is=652a87f1&hm=6406dbdab38d7ce412895431f4faaeb6c2de682d8049325bc95b9158d4d3cb53&";
    }, 4000);
  }
  else if(selectedLanes.toString().startsWith("1,3,5")){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //3->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162720169257349160/JPEG-1.jpg?ex=653cf68a&is=652a818a&hm=77793e3a00e0103707a89de31d2084f6bd9309e60da20e5bf166a643e17ca1f4&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162720476225871912/JPEG-1.jpg?ex=653cf6d3&is=652a81d3&hm=0249e1bd727945f4dbf6d1ea8471e0fc668be4a537907d6714756b3e7e5f5210&";
    }, 2500);
    //5->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162727442373427260/JPEG-1.jpg?ex=653cfd50&is=652a8850&hm=8aa338b226907ba9dc4fd415c6c4f52221a6d097559fc6e062e3a94d7bd56b96&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162727775094980719/JPEG-1.jpg?ex=653cfda0&is=652a88a0&hm=90f07c0036b1b657c9e66560dbd27790e3a3e454b3a720f60f691924e673846a&";
    }, 3500);
  }
  else if(selectedLanes.toString() === "1,3,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //3->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162720169257349160/JPEG-1.jpg?ex=653cf68a&is=652a818a&hm=77793e3a00e0103707a89de31d2084f6bd9309e60da20e5bf166a643e17ca1f4&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162720476225871912/JPEG-1.jpg?ex=653cf6d3&is=652a81d3&hm=0249e1bd727945f4dbf6d1ea8471e0fc668be4a537907d6714756b3e7e5f5210&";
    }, 2500);
    //6->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162727534790705172/JPEG-1.jpg?ex=653cfd66&is=652a8866&hm=ec8d326217fe62af12214d069c0b8b999c8e03a345b7175c9d8bf1144d407eee&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162727869324206221/JPEG-1.jpg?ex=653cfdb6&is=652a88b6&hm=e6298504531656599075d746553dd1fa349442b830f701788add682aeada7c80&";
    }, 3500);
  }
  else if(selectedLanes.toString().startsWith("1,3,4,5")){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //3->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162720169257349160/JPEG-1.jpg?ex=653cf68a&is=652a818a&hm=77793e3a00e0103707a89de31d2084f6bd9309e60da20e5bf166a643e17ca1f4&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162720476225871912/JPEG-1.jpg?ex=653cf6d3&is=652a81d3&hm=0249e1bd727945f4dbf6d1ea8471e0fc668be4a537907d6714756b3e7e5f5210&";
    }, 2500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162726841396768858/JPEG-1.jpg?ex=653cfcc1&is=652a87c1&hm=e4bade5e8d0f9315e690b2dd14d6ca9581aaeeac5bc9cb6e173541e348759ccc&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162726953850241044/JPEG-1.jpg?ex=653cfcdc&is=652a87dc&hm=86dbc206c283437109a1168b6631c5c11e7f5d45ff7837bf60262361d2d8795d&";
    }, 3500);
    //5->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162728206265229442/JPEG-1.jpg?ex=653cfe06&is=652a8906&hm=e456468c3520fcc26eb48e2eab7968642e363dbac5b53074ce9f3df9a7adb0f7&";
    }, 4000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162728340101288036/JPEG-1.jpg?ex=653cfe26&is=652a8926&hm=a1086a93c1f693e451f2e02c35aa2eb91f7235e0351e7ad03b2573e5fe124b20&";
    }, 4500);
  }
  else if(selectedLanes.toString() === "1,3,4,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //3->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162720169257349160/JPEG-1.jpg?ex=653cf68a&is=652a818a&hm=77793e3a00e0103707a89de31d2084f6bd9309e60da20e5bf166a643e17ca1f4&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162720476225871912/JPEG-1.jpg?ex=653cf6d3&is=652a81d3&hm=0249e1bd727945f4dbf6d1ea8471e0fc668be4a537907d6714756b3e7e5f5210&";
    }, 2500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162726841396768858/JPEG-1.jpg?ex=653cfcc1&is=652a87c1&hm=e4bade5e8d0f9315e690b2dd14d6ca9581aaeeac5bc9cb6e173541e348759ccc&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162726953850241044/JPEG-1.jpg?ex=653cfcdc&is=652a87dc&hm=86dbc206c283437109a1168b6631c5c11e7f5d45ff7837bf60262361d2d8795d&";
    }, 3500);
    //6->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162728437925019678/JPEG-1.jpg?ex=653cfe3e&is=652a893e&hm=d2f0c5e5a6fbb150a2ad6acabda00ca41749d525e26bb7471938ce99fce9dfcc&";
    }, 4000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162728565259907175/JPEG-1.jpg?ex=653cfe5c&is=652a895c&hm=dbd79ca2e6f0b68c5179715884577d1698d698aaee04a8ecfaee7feec9005061&";
    }, 4500);
  }
  else if(selectedLanes.toString() === "1,4"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162744903047057559/JPEG-1.jpg?ex=653d0d93&is=652a9893&hm=4af8b87d6b5e2ceabe0aefde7a24fcb851027b770a34318222ef5c2a7f1daeb1&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162747260405301298/JPEG-1.jpg?ex=653d0fc5&is=652a9ac5&hm=e818020f187ed9f3d58bf1053406d6835432854d2b884bb6757e5961cfb60b0f&";
    }, 2500);
    //G1_4
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162747534880559245/JPEG-1.jpg?ex=653d1007&is=652a9b07&hm=4249854223c436e9a9c96d4e2970cb3c505e6596fbffee3f0a456bf0c8f0bab8&";
    }, 3000);
  }
  else if(selectedLanes.toString() === "1,4,5"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162744903047057559/JPEG-1.jpg?ex=653d0d93&is=652a9893&hm=4af8b87d6b5e2ceabe0aefde7a24fcb851027b770a34318222ef5c2a7f1daeb1&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162747260405301298/JPEG-1.jpg?ex=653d0fc5&is=652a9ac5&hm=e818020f187ed9f3d58bf1053406d6835432854d2b884bb6757e5961cfb60b0f&";
    }, 2500);
    //5->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162748251187990630/JPEG-1.jpg?ex=653d10b1&is=652a9bb1&hm=e291087bc506850f2c64c26894535bd98fca88ce5842a8654d6e40b80ae7fcf5&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162748803569434775/JPEG-1.jpg?ex=653d1135&is=652a9c35&hm=8393816a8f1201e84e9fd6871b41f4ca2542d926d2aacd68543aa97e65e22e7d&";
    }, 3500);
    //G1_4_5
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162748899052757072/JPEG-1.jpg?ex=653d114c&is=652a9c4c&hm=c1bced02ba4c21f75c729c17a858ba6b94fe5dfe9b55a25268eb0e36befef682&";
    }, 4000);
  }
  else if(selectedLanes.toString() === "1,4,5,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162744903047057559/JPEG-1.jpg?ex=653d0d93&is=652a9893&hm=4af8b87d6b5e2ceabe0aefde7a24fcb851027b770a34318222ef5c2a7f1daeb1&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162747260405301298/JPEG-1.jpg?ex=653d0fc5&is=652a9ac5&hm=e818020f187ed9f3d58bf1053406d6835432854d2b884bb6757e5961cfb60b0f&";
    }, 2500);
    //5->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162748251187990630/JPEG-1.jpg?ex=653d10b1&is=652a9bb1&hm=e291087bc506850f2c64c26894535bd98fca88ce5842a8654d6e40b80ae7fcf5&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162748803569434775/JPEG-1.jpg?ex=653d1135&is=652a9c35&hm=8393816a8f1201e84e9fd6871b41f4ca2542d926d2aacd68543aa97e65e22e7d&";
    }, 3500);
    //6->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162749529091752006/JPEG-1.jpg?ex=653d11e2&is=652a9ce2&hm=0f996b1d4fb7e4214d9cbc8154b177e5935237b27b604445fa73eb80ea0aa999&";
    }, 4000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162749753998725121/JPEG-1.jpg?ex=653d1218&is=652a9d18&hm=63c08654788afc157a8a20725085c7bb1fab475c3239c88484ed6a5b31215f10&";
    }, 4500);
  }
  else if(selectedLanes.toString() === "1,4,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162744903047057559/JPEG-1.jpg?ex=653d0d93&is=652a9893&hm=4af8b87d6b5e2ceabe0aefde7a24fcb851027b770a34318222ef5c2a7f1daeb1&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162747260405301298/JPEG-1.jpg?ex=653d0fc5&is=652a9ac5&hm=e818020f187ed9f3d58bf1053406d6835432854d2b884bb6757e5961cfb60b0f&";
    }, 2500);
    //6->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162750298557780098/JPEG-1.jpg?ex=653d129a&is=652a9d9a&hm=e78fbb20b50a4f894e9d6ae800518a18b8c74e5d361386775e6f00a8f5e49845&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162750407097991289/JPEG-1.jpg?ex=653d12b3&is=652a9db3&hm=da75a169170b7fa31e900b11e827275a25695abc5355a0d053ff288fb6e5b05d&";
    }, 3500);
  }
  else if(selectedLanes.toString() === "1,5"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //5->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162750918043910314/JPEG-1.jpg?ex=653d132d&is=652a9e2d&hm=6f151864ce97e8862e8b62eba79d642f60d78436a069b6ac50fb0fbf1ffad6c4&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162751173145669722/JPEG-1.jpg?ex=653d136a&is=652a9e6a&hm=4c98fbb62077ab11fd49ad10328a03805aabc80ef9cf0972943ec4344e1e949d&";
    }, 2500);
    //G1_5
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162751569650008144/JPEG-1.jpg?ex=653d13c9&is=652a9ec9&hm=2fb4dbdea0f2108407029e77c9a21f77b2edb58542f7ee9142a0f2d7b7a4e827&";
    }, 3000);
  }
  else if(selectedLanes.toString() === "1,5,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //5->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162750918043910314/JPEG-1.jpg?ex=653d132d&is=652a9e2d&hm=6f151864ce97e8862e8b62eba79d642f60d78436a069b6ac50fb0fbf1ffad6c4&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162751173145669722/JPEG-1.jpg?ex=653d136a&is=652a9e6a&hm=4c98fbb62077ab11fd49ad10328a03805aabc80ef9cf0972943ec4344e1e949d&";
    }, 2500);
    //6->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162751768682307676/JPEG-1.jpg?ex=653d13f8&is=652a9ef8&hm=2a1ab51172ce7f5d5ed8ab7ca6c167777682ee03d7e6ceef7737e6e36e530299&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162751917286510733/JPEG-1.jpg?ex=653d141b&is=652a9f1b&hm=eadebd846ef2205cec7f7fb8ba1dc93df74542d2aca0159bbd80572abeb09414&";
    }, 3500);
  }
  else if(selectedLanes.toString() === "1,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //1->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470238298841128/JPEG-1.jpg?ex=653c0dc6&is=652998c6&hm=c9795ba68f742f4f8c69bc36e45c0722dfac686ab5dca6d8073fc58a4357b2d6&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162470366741016687/JPEG-1.jpg?ex=653c0de5&is=652998e5&hm=16397f7acce6e315822d71a09b66f152f1caa8ee9fb0ffc69164da69c56b6127&";
    }, 1500);
    //6->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162752152075251733/JPEG-1.jpg?ex=653d1453&is=652a9f53&hm=f409badfe05b905b47af468583ed82336398ccb00eb5b8e62db5a40a7d06010b&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162752325627150497/JPEG-1.jpg?ex=653d147d&is=652a9f7d&hm=0cc259369b7f1d6e721104adaf3a73e6935ab3d0f77d8d228d1bfe473ef3d0b9&";
    }, 2500);
  }
  else if(selectedLanes.toString() === "2"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //2->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753074427871292/JPEG-1.jpg?ex=653d152f&is=652aa02f&hm=eafd74c98dfe85b2dae31f31def091a16682e77a76933c9146fa50b8de8c0295&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753196918313010/JPEG-1.jpg?ex=653d154d&is=652aa04d&hm=eb7a0684e726ac8cdf89544b43926052e04706e7cbcb8850153005de77ef1f53&";
    }, 1500);
    //G2
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753973074272366/JPEG-1.jpg?ex=653d1606&is=652aa106&hm=150fe55bdb5f25485e3394f71dfda6c4efc42c93ea984d5ecc15dd0fa6adaf67&";
    }, 2000);
  }
  else if(selectedLanes.toString() === "2,5"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //2->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753074427871292/JPEG-1.jpg?ex=653d152f&is=652aa02f&hm=eafd74c98dfe85b2dae31f31def091a16682e77a76933c9146fa50b8de8c0295&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753196918313010/JPEG-1.jpg?ex=653d154d&is=652aa04d&hm=eb7a0684e726ac8cdf89544b43926052e04706e7cbcb8850153005de77ef1f53&";
    }, 1500);
     //5->
     setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162754275127087135/JPEG-1.jpg?ex=653d164e&is=652aa14e&hm=fb0cae0a6da64803f16a3c5094fbf9c6d1c380d709e041fc47b2075bbe1b55a0&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162754610868523129/JPEG-1.jpg?ex=653d169e&is=652aa19e&hm=0120f02a7a988660146fffb94b000b6e3dbbf3b4eb625b951fd2a0ff8a0de90c&";
    }, 2500);
    //G2_5
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162754736123019264/JPEG-1.jpg?ex=653d16bc&is=652aa1bc&hm=6c3915922cdb35e0ac86632c4a13e37763bbab918b076eebbba89843047bbcfe&";
    }, 3000);
  }
  else if(selectedLanes.toString() === "2,5,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //2->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753074427871292/JPEG-1.jpg?ex=653d152f&is=652aa02f&hm=eafd74c98dfe85b2dae31f31def091a16682e77a76933c9146fa50b8de8c0295&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753196918313010/JPEG-1.jpg?ex=653d154d&is=652aa04d&hm=eb7a0684e726ac8cdf89544b43926052e04706e7cbcb8850153005de77ef1f53&";
    }, 1500);
     //5->
     setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162754275127087135/JPEG-1.jpg?ex=653d164e&is=652aa14e&hm=fb0cae0a6da64803f16a3c5094fbf9c6d1c380d709e041fc47b2075bbe1b55a0&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162754610868523129/JPEG-1.jpg?ex=653d169e&is=652aa19e&hm=0120f02a7a988660146fffb94b000b6e3dbbf3b4eb625b951fd2a0ff8a0de90c&";
    }, 2500);
    //6->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162755110997332080/JPEG-1.jpg?ex=653d1715&is=652aa215&hm=23644b8de67454d052e48d6f8e3dd6a13b3347eb57dd478492df21628e19e17c&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162755288475111504/JPEG-1.jpg?ex=653d173f&is=652aa23f&hm=d569544d6d7b3f14bbe2a6a26be9fdf81a9a7a971a54054d582dacc4334df837&";
    }, 3500);
  }
  else if(selectedLanes.toString().startsWith("2,3")){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //2->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753074427871292/JPEG-1.jpg?ex=653d152f&is=652aa02f&hm=eafd74c98dfe85b2dae31f31def091a16682e77a76933c9146fa50b8de8c0295&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753196918313010/JPEG-1.jpg?ex=653d154d&is=652aa04d&hm=eb7a0684e726ac8cdf89544b43926052e04706e7cbcb8850153005de77ef1f53&";
    }, 1500);
     //3->E
     setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162756199700234260/JPEG-1.jpg?ex=653d1818&is=652aa318&hm=d0700ab056d1984011292be14d9d60e8c56388d57300ab2f168daa0f6cada1de&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162756377681338448/JPEG-1.jpg?ex=653d1843&is=652aa343&hm=c7f797cfca33deaeb9d4e41eab7920fb1934059ad6b485c5e63f2e6b4ea58c17&";
    }, 2500);
  }
  else if(selectedLanes.toString().startsWith("2,4")){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //2->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753074427871292/JPEG-1.jpg?ex=653d152f&is=652aa02f&hm=eafd74c98dfe85b2dae31f31def091a16682e77a76933c9146fa50b8de8c0295&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753196918313010/JPEG-1.jpg?ex=653d154d&is=652aa04d&hm=eb7a0684e726ac8cdf89544b43926052e04706e7cbcb8850153005de77ef1f53&";
    }, 1500);
     //4->E
     setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162756473185640458/JPEG-1.jpg?ex=653d185a&is=652aa35a&hm=2b57189f7224e488eab63a57bfb4b5a03daed1c730398effd821210a7d7912d2&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162756557327564961/JPEG-1.jpg?ex=653d186e&is=652aa36e&hm=e9aa218c5f5e1921eeec16c342777c597fc45ddfc09ea8cc2568d0512528e173&";
    }, 2500);
  }
  else if(selectedLanes.toString() === "2,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //2->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753074427871292/JPEG-1.jpg?ex=653d152f&is=652aa02f&hm=eafd74c98dfe85b2dae31f31def091a16682e77a76933c9146fa50b8de8c0295&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162753196918313010/JPEG-1.jpg?ex=653d154d&is=652aa04d&hm=eb7a0684e726ac8cdf89544b43926052e04706e7cbcb8850153005de77ef1f53&";
    }, 1500);
     //6->E
     setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162756716354601041/JPEG-1.jpg?ex=653d1894&is=652aa394&hm=9f148bc768d5502dbdeb9d34bf1c3875d0dbe1c19994fef4eb69fced55f6b498&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162756845174280232/JPEG-1.jpg?ex=653d18b2&is=652aa3b2&hm=69bce37540bbb3a3d6e8a7901220ab9a45dca1b7f6d7e421ac83912bf32b4f41&";
    }, 2500);
  }
  else if(selectedLanes.toString() === "3"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //3->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757090901770280/JPEG-1.jpg?ex=653d18ed&is=652aa3ed&hm=d816739cb6909d386a8cb72ad8398d99e2b2f0cfd1f9ddbb6e2b9499eb5b8707&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757267339358281/JPEG-1.jpg?ex=653d1917&is=652aa417&hm=8c363453c893bfba82d8088ae7aca01f05b9535ebed49b4c3a52b853364c08a0&";
    }, 1500);
    //G3
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757383089557584/JPEG-1.jpg?ex=653d1933&is=652aa433&hm=aaef68ea77172f13c5f1ba865ab50a3cf6926f1376af88754b3e9fe25898f85b&";
    }, 2000);
  }
  else if(selectedLanes.toString() === "3,4"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //3->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757090901770280/JPEG-1.jpg?ex=653d18ed&is=652aa3ed&hm=d816739cb6909d386a8cb72ad8398d99e2b2f0cfd1f9ddbb6e2b9499eb5b8707&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757267339358281/JPEG-1.jpg?ex=653d1917&is=652aa417&hm=8c363453c893bfba82d8088ae7aca01f05b9535ebed49b4c3a52b853364c08a0&";
    }, 1500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757583136895106/JPEG-1.jpg?ex=653d1962&is=652aa462&hm=af44bf4f823ee6956b30bd416986babb1b8fe27fcfe22e01addd12a978998939&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757744051367987/JPEG-1.jpg?ex=653d1989&is=652aa489&hm=e534ee783229ae67102ce86f81639ee3cd4a0495286258610ef8fdb1ce9c4724&";
    }, 2500);
    //G3_4
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757869163257978/JPEG-1.jpg?ex=653d19a7&is=652aa4a7&hm=8f057bad7787704d1310e1b6fed76dc1ad54c2dc9f5add12479c9de09007c0f8&";
    }, 3000);
  }
  else if(selectedLanes.toString().startsWith("3,4,5")){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //3->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757090901770280/JPEG-1.jpg?ex=653d18ed&is=652aa3ed&hm=d816739cb6909d386a8cb72ad8398d99e2b2f0cfd1f9ddbb6e2b9499eb5b8707&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757267339358281/JPEG-1.jpg?ex=653d1917&is=652aa417&hm=8c363453c893bfba82d8088ae7aca01f05b9535ebed49b4c3a52b853364c08a0&";
    }, 1500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757583136895106/JPEG-1.jpg?ex=653d1962&is=652aa462&hm=af44bf4f823ee6956b30bd416986babb1b8fe27fcfe22e01addd12a978998939&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757744051367987/JPEG-1.jpg?ex=653d1989&is=652aa489&hm=e534ee783229ae67102ce86f81639ee3cd4a0495286258610ef8fdb1ce9c4724&";
    }, 2500);
    //5->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162758340275871824/JPEG-1.jpg?ex=653d1a17&is=652aa517&hm=dbf2fc3ae1da48628877df812f0201a42b62e139339a7619db4908c826f61358&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162758540423868456/JPEG-1.jpg?ex=653d1a47&is=652aa547&hm=b6ea24e1770a3720567639f12f0b714c93be49ba1ae25555e62ee020157f110a&";
    }, 3500);
  }
  else if(selectedLanes.toString() === "3,4,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //3->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757090901770280/JPEG-1.jpg?ex=653d18ed&is=652aa3ed&hm=d816739cb6909d386a8cb72ad8398d99e2b2f0cfd1f9ddbb6e2b9499eb5b8707&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757267339358281/JPEG-1.jpg?ex=653d1917&is=652aa417&hm=8c363453c893bfba82d8088ae7aca01f05b9535ebed49b4c3a52b853364c08a0&";
    }, 1500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757583136895106/JPEG-1.jpg?ex=653d1962&is=652aa462&hm=af44bf4f823ee6956b30bd416986babb1b8fe27fcfe22e01addd12a978998939&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757744051367987/JPEG-1.jpg?ex=653d1989&is=652aa489&hm=e534ee783229ae67102ce86f81639ee3cd4a0495286258610ef8fdb1ce9c4724&";
    }, 2500);
    //6->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162758633889726565/JPEG-1.jpg?ex=653d1a5d&is=652aa55d&hm=fdd3a126eb8c77d6621a650461b45625d303f6624614bc68e9d63cfd8cbb5eae&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162758714185482400/JPEG-1.jpg?ex=653d1a70&is=652aa570&hm=41c3e1df9ab61d3702dfc5ec4aeaa3ccdf2b516b722d825b98b5d353678f6394&";
    }, 3500);
  }
  else if(selectedLanes.toString().startsWith("3,5")){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //3->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757090901770280/JPEG-1.jpg?ex=653d18ed&is=652aa3ed&hm=d816739cb6909d386a8cb72ad8398d99e2b2f0cfd1f9ddbb6e2b9499eb5b8707&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757267339358281/JPEG-1.jpg?ex=653d1917&is=652aa417&hm=8c363453c893bfba82d8088ae7aca01f05b9535ebed49b4c3a52b853364c08a0&";
    }, 1500);
    //5->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162759123042041856/JPEG-1.jpg?ex=653d1ad1&is=652aa5d1&hm=a2bdc57a5b9e639e2c0323eb0254236b20ea34717507a6cf4b892b7f4db13dc0&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162759220672856175/JPEG-1.jpg?ex=653d1ae9&is=652aa5e9&hm=b755591d3d17ca87fadd36fa47aa45356b59eb20e93e45be538614d6b518237b&";
    }, 2500);
  }
  else if(selectedLanes.toString() === "3,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //3->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757090901770280/JPEG-1.jpg?ex=653d18ed&is=652aa3ed&hm=d816739cb6909d386a8cb72ad8398d99e2b2f0cfd1f9ddbb6e2b9499eb5b8707&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162757267339358281/JPEG-1.jpg?ex=653d1917&is=652aa417&hm=8c363453c893bfba82d8088ae7aca01f05b9535ebed49b4c3a52b853364c08a0&";
    }, 1500);
    //6->E
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162759390500237362/JPEG-1.jpg?ex=653d1b11&is=652aa611&hm=4e796ac28ce53887812695bbc2c57141e9814f08b68b8037a801402aea333de5&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162759465242734592/JPEG-1.jpg?ex=653d1b23&is=652aa623&hm=4fbde36f97947107cec7b41c15488428bc1760f8882f564623f8c62fea5e2f1e&";
    }, 2500);
  }
  else if(selectedLanes.toString() === "4"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162759764464390204/JPEG-1.jpg?ex=653d1b6a&is=652aa66a&hm=641a40e47d52b8dd7386af147f139323dad587e92f0b2d963a7e78061328b648&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162759914398154782/JPEG-1.jpg?ex=653d1b8e&is=652aa68e&hm=3bdbac150f752983c23fe02c991bd00b18ad7a13c62b20fb78d31f0597965857&";
    }, 1500);
    //G4
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162760050541076550/JPEG-1.jpg?ex=653d1baf&is=652aa6af&hm=aa5f8315e54e16a36f63be47b6a1d91d165b0b0b1eb20ae039bb769dffaaa094&";
    }, 2000);
  }
  else if(selectedLanes.toString() === "4,5"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162759764464390204/JPEG-1.jpg?ex=653d1b6a&is=652aa66a&hm=641a40e47d52b8dd7386af147f139323dad587e92f0b2d963a7e78061328b648&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162759914398154782/JPEG-1.jpg?ex=653d1b8e&is=652aa68e&hm=3bdbac150f752983c23fe02c991bd00b18ad7a13c62b20fb78d31f0597965857&";
    }, 1500);
    //5->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162760248092786749/JPEG-1.jpg?ex=653d1bde&is=652aa6de&hm=b5638eafa9a6a9189cb2415eaf93e917a980b237d2e42cc985dd90d3d92b6f48&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162761312573591622/JPEG-1.jpg?ex=653d1cdb&is=652aa7db&hm=2f22574cf15a463b3d124b0dae4eebb7ea6ebe16c27548549c1416fe3312ff70&";
    }, 2500);
    //G4_5
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162761430911688784/JPEG-1.jpg?ex=653d1cf8&is=652aa7f8&hm=ae97e381be40144c6c8685d6e6d0b1e7bfa8c32f5ad8f00fa0111646c197720e&";
    }, 3000);
  }
  else if(selectedLanes.toString() === "4,5,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162759764464390204/JPEG-1.jpg?ex=653d1b6a&is=652aa66a&hm=641a40e47d52b8dd7386af147f139323dad587e92f0b2d963a7e78061328b648&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162759914398154782/JPEG-1.jpg?ex=653d1b8e&is=652aa68e&hm=3bdbac150f752983c23fe02c991bd00b18ad7a13c62b20fb78d31f0597965857&";
    }, 1500);
    //5->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162760248092786749/JPEG-1.jpg?ex=653d1bde&is=652aa6de&hm=b5638eafa9a6a9189cb2415eaf93e917a980b237d2e42cc985dd90d3d92b6f48&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162761312573591622/JPEG-1.jpg?ex=653d1cdb&is=652aa7db&hm=2f22574cf15a463b3d124b0dae4eebb7ea6ebe16c27548549c1416fe3312ff70&";
    }, 2500);
    //6->
    setTimeout(function () {
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162761574612738189/JPEG-1.jpg?ex=653d1d1a&is=652aa81a&hm=09dacd4424463f23d755ddbfb08bd71631701f38720550c0eafbb3c8ae4ce1f0&";
    }, 3000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162761776824320032/JPEG-1.jpg?ex=653d1d4a&is=652aa84a&hm=fa84a0fcb0cb76b5c730e5497aa422fbde57a60106bc0169f1e484f773d150b9&";
    }, 3500);
    //G4_5_6
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162761860613943356/JPEG-1.jpg?ex=653d1d5e&is=652aa85e&hm=e0d29387a2ba5149d104558d0079eb9b8e95d42724b2c34918f3086791382a47&";
    }, 4000);
  }
  else if(selectedLanes.toString() === "4,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //4->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162759764464390204/JPEG-1.jpg?ex=653d1b6a&is=652aa66a&hm=641a40e47d52b8dd7386af147f139323dad587e92f0b2d963a7e78061328b648&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162759914398154782/JPEG-1.jpg?ex=653d1b8e&is=652aa68e&hm=3bdbac150f752983c23fe02c991bd00b18ad7a13c62b20fb78d31f0597965857&";
    }, 1500);
    //6->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162781302316077076/JPEG-1.jpg?ex=653d2f79&is=652aba79&hm=4a57cd2d3378371836ba61cffd0bac927c5a6b99adbdb4e9023e85314c3145f2&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162781442951090277/JPEG-1.jpg?ex=653d2f9b&is=652aba9b&hm=72bea0f97c11d137a39d0b34913b8e957b6740feecc23faa2f0b7da1f20b87e3&";
    }, 2500);
    //G4_6
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162781573612052550/JPEG-1.jpg?ex=653d2fba&is=652ababa&hm=614ef4bd2d966030662a110fef6c18f575d980b69e912d449cc82728d87e753f&";
    }, 3000);
  }
  else if(selectedLanes.toString() === "5"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //5->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162762203821264945/JPEG-1.jpg?ex=653d1db0&is=652aa8b0&hm=f439ea305035a2a068dce4893afd9d68e29e04822c7d6b9c52593e5569be1afd&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162762341142773860/JPEG-1.jpg?ex=653d1dd1&is=652aa8d1&hm=7876c3c86226a2108980683c465f4d7e0f240bdf3acdb8dc906a6d5eaa0bb837&";
    }, 1500);
    //G5
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162762416711544952/JPEG-1.jpg?ex=653d1de3&is=652aa8e3&hm=ab4bb96808004eece37e6e8a5aa0ee5a3a8f19c17046f2de621282bc0100173b&";
    }, 2000);
  }
  else if(selectedLanes.toString() === "5,6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //5->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162762203821264945/JPEG-1.jpg?ex=653d1db0&is=652aa8b0&hm=f439ea305035a2a068dce4893afd9d68e29e04822c7d6b9c52593e5569be1afd&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162762341142773860/JPEG-1.jpg?ex=653d1dd1&is=652aa8d1&hm=7876c3c86226a2108980683c465f4d7e0f240bdf3acdb8dc906a6d5eaa0bb837&";
    }, 1500);
    //6->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162762541492076656/JPEG-1.jpg?ex=653d1e00&is=652aa900&hm=03a4e9a6ab282dea43e18f1453b8b1f02d88e2bf4622c5153b9e515c844c9016&";
    }, 2000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162762682781421638/JPEG-1.jpg?ex=653d1e22&is=652aa922&hm=08549f32d60f147a816f3d7b2a7ea9acc40df30b506530d91826a9d3a70d95c1&";
    }, 2500);
    //G5_6
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162762763853123645/JPEG-1.jpg?ex=653d1e35&is=652aa935&hm=6c183e287d5a65507387cb07fefae00301075e97f6d34ef826e4aadcf168e40d&";
    }, 3000);
  }
  else if(selectedLanes.toString() === "6"){
    //start
    dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467706407227524/JPEG-1.jpg?ex=653c0b6a&is=6529966a&hm=e968564f45c3c26e40c468dfba4c8c7c1ccf81b9d2970f7cbf44cf9e8cffdbfc&";
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162467858257825792/JPEG-1.jpg?ex=653c0b8f&is=6529968f&hm=6d02b89401caf1c734da4bbefe269e776bdce5635df9dff3e7c3010c3eca7c9f&";
    }, 500);
    //6->
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162762955897708666/JPEG-1.jpg?ex=653d1e63&is=652aa963&hm=911db1ac6b36dd7a338c38f9fa3b63866af862440ffe04c7f0a322e4d4ce7132&";
    }, 1000);
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162763080783122522/JPEG-1.jpg?ex=653d1e81&is=652aa981&hm=c418fc1f7a980a1cb1a989d4999c41714c333bd1f925abb9861c4013584d212c&";
    }, 1500);
    //G6
    setTimeout(function () {
      dfapic.src="https://cdn.discordapp.com/attachments/933974489207832619/1162763256545415188/JPEG-1.jpg?ex=653d1eab&is=652aa9ab&hm=88cc9ce18d8a5f0d1030b8488061c65b0c13ae1db983965ed5c5839a7644eba8&";
    }, 2000);
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
const trafficLightStatesIndexes = [2, 2, 1, 0, 1, 2];// 0-yellow, 1-green, 2-red
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