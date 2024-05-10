const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
let userInput = document.getElementById("user-input");
const resultOutput = document.getElementById("results-div");

//Check Button Functionality
checkBtn.addEventListener("click", validateNumber);

function validateNumber() {

  let valueArray = userInput.value;
  console.log(valueArray.length);

    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

    if (userInput.value ==="") {
      alert("Please provide a phone number");
    } else if(regex.test(valueArray)) {
      resultOutput.innerText = `Valid US number: ${userInput.value}`;
    } else {
      resultOutput.innerText = `Invalid US number: ${userInput.value}`
    }

}




//Clear Button Functionality

clearBtn.addEventListener("click",clear);

function clear() {
  resultOutput.innerText="";
  
}
