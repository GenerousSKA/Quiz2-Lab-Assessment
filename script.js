// script.js

// Define the full name to be inserted
const fullName = "Kareem Shonibare"; // Replace this with the desired full name or obtain it dynamically

// Function to replace the placeholder with the user's full name
function replacePlaceholder() {
  // Get the element with the id 'fullName'
  const nameElement = document.getElementById("fullName");

  // Replace the placeholder text with the actual full name
  if (nameElement) {
    nameElement.textContent = fullName;
  }
}

// Run the function when the page has fully loaded
window.onload = replacePlaceholder;

// script.js

// Function to replace the placeholder with the user's full name
function replacePlaceholder(name) {
  const nameElement = document.getElementById("fullName");
  if (nameElement) {
    nameElement.textContent = name;
  }
}

// Function to handle the button click event
function handleButtonClick() {
  let validName = false;
  let userName;

  while (!validName) {
    userName = prompt("Kareem Shonibare:");
    if (userName && isNaN(userName.trim()) && userName.trim().length > 0) {
      validName = true;
    } else {
      alert("Invalid input. Please enter a valid string.");
    }
  }

  replacePlaceholder(userName.trim());
}

// Add event listener to the button
window.onload = function () {
  const button = document.getElementById("changeNameButton");
  if (button) {
    button.addEventListener("click", handleButtonClick);
  }
};
