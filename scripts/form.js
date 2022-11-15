// Access to DOM Elements

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const emailAddress = document.querySelector("#email");
const dateOfBirth = document.querySelector("#birthdate");
const numberOfGamesPlayed = document.querySelector("#quantity");
const locationCheck = document.querySelectorAll(".location-checkbox");
const conditionsCheck = document.querySelector("#checkbox1");
const error1 = document.querySelector("#error-first");
const error2 = document.querySelector("#error-last");
const error3 = document.querySelector("#error-email");
const error4 = document.querySelector("#error-birth");
const error5 = document.querySelector("#error-quantity");
const error6 = document.querySelector("#error-location");
const error7 = document.querySelector("#error-conditions");


// Regex

const regexName = /^([a-zA-Z-' ]+)$/;
const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;


// Error messages

const message1 = "Votre prénom doit comporter au moins 2 caractères";
const message2 = "Votre nom de famille doit comporter au moins 2 caractères";
const message3 = "Vous devez saisir une adresse e-mail valide";
const message4 = "Vous devez indiquer votre date de naissance";
const message5 = "Vous devez indiquer le nombre de tournois auxquels vous avez participé";
const message7 = "Vous devez accepter les conditions d'utilisation";


// Generic function to validate each field

let formValid = true;

function fieldValidate(condition, name, error, message) {  
    if(condition){
        error.style.display = "none";
        error.textContent = "";
        name.classList.remove ("border-invalid");
        //return true;
    }else{
        formValid = false;
        error.style.display = "block";
        name.classList.add ("border-invalid");
        error.textContent = message;
    }
}
 

// Functions : first name, last name, email address, date of birth, games played, conditions

firstName.addEventListener('input', function() {
    fieldValidate(firstName.value.length>=2 && regexName.test(firstName.value)=== true, firstName, error1, message1);});

lastName.addEventListener('input', function() {
    fieldValidate(lastName.value.length>=2 && regexName.test(lastName.value)=== true, lastName, error2, message2);});

emailAddress.addEventListener('input', function() {
    fieldValidate(emailAddress.value!="" && regexEmail.test(emailAddress.value)=== true, emailAddress, error3, message3)});

dateOfBirth.addEventListener('input', function() {
    fieldValidate(dateOfBirth.value!="", dateOfBirth, error4, message4);});

numberOfGamesPlayed.addEventListener('input', function() {
    fieldValidate(numberOfGamesPlayed.value!="", numberOfGamesPlayed, error5, message5);});

conditionsCheck.addEventListener('click', function() {
    fieldValidate(conditionsCheck.checked == true, conditionsCheck, error7, message7);});


// Function : choose location

locationCheck.forEach((location) => location.addEventListener('change', locationValidate));

function locationValidate() {
    let checked = false;
    for (let i = 0; i < locationCheck.length; i++) {
        if(locationCheck[i].checked) {
            checked = true;
        }
    }
    if (checked){
        error6.style.display = "none";
        error6.textContent = "";
        /*return true;*/
    }else{
        formValid = false;
        error6.style.display = "block";
        error6.textContent = "Vous devez choisir une ville";
    }
}


//Check that all the inputs are correct before submitting form

const submitBtn = document.querySelector(".btn-submit");
const registrationForm = document.querySelector("form");
const confirmation = document.querySelector(".greeting-message");

submitBtn.addEventListener('click', validate);

function validate(event) { 
    event.preventDefault();
        fieldValidate(firstName.value.length>=2 && regexName.test(firstName.value)=== true, firstName, error1, message1)
        fieldValidate(lastName.value.length>=2 && regexName.test(lastName.value)=== true, lastName, error2, message2)
        fieldValidate(emailAddress.value!="" && regexEmail.test(emailAddress.value)=== true, emailAddress, error3, message3)
        fieldValidate(dateOfBirth.value!="", dateOfBirth, error4, message4)
        fieldValidate(numberOfGamesPlayed.value!="", numberOfGamesPlayed, error5, message5)
        locationValidate()
        fieldValidate(conditionsCheck.checked == true, conditionsCheck, error7, message7)
        if(formValid){
            registrationConfirm();
        }else{
            setTimeout(function() {
            alert("Veuillez remplir tous les champs du formulaire");
        }, 200);
        formValid = true;   
    }
}


//Display greeting screen and reset by clearing entered values after submission
function registrationConfirm() {
    registrationForm.style.display = "none";
    confirmation.style.display = "block";
    firstName.value="";
    lastName.value="";
    emailAddress.value="";
    dateOfBirth.value="";
    numberOfGamesPlayed.value="";
    conditionsCheck.checked = false;
        for (let i = 0; i < locationCheck.length; i++) {
            locationCheck[i].checked=false
        }
  }






  
























