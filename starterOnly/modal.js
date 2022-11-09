function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const confirmationbg = document.querySelector(".bground2");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const closeConfirmationBtn = document.querySelector(".close-2");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Stop modal event
closeBtn.addEventListener("click", closeModal);

// Close modal form with the X close button
function closeModal() {
  modalbg.style.display = "none";
}

//Stop modal event
closeConfirmationBtn.addEventListener("click", closeConfirmation);

// Close confimation message with the X close button
function closeConfirmation() {
  confirmationbg.style.display = "none";
}








