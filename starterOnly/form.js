// Access to DOM Elements

let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let emailAddress = document.getElementById("email");
const dateOfBirth = document.getElementById("birthdate");
const numberOfGamesPlayed = document.getElementById("quantity");
const locationCheck = document.getElementsByClassName("location-checkbox");
const conditionsCheck = document.getElementById("checkbox1");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const error4 = document.getElementById("error4");
const error5 = document.getElementById("error5");


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

function fieldValidate(condition, name, error, message) { 
    console.log (condition)   
    if(condition){
        error.style.display = "block";
        name.classList.add ("border-invalid");
        error.textContent = message;
    }else{
        error.style.display = "none";
        error.textContent = "";
        name.classList.remove ("border-invalid");
    }
    return true;
}

       
// Functions : first name, last name, email address, date of birth, games played, conditions

firstName.addEventListener('change', function() {
    fieldValidate(firstName.value.length<2 || regexName.test(firstName.value)== false, firstName, error1, message1);
});

lastName.addEventListener('change', function() {
    fieldValidate(lastName.value.length<2 || regexName.test(lastName.value)== false, lastName, error2, message2);
});

emailAddress.addEventListener('change', function() {
    fieldValidate(emailAddress.value=="" || regexEmail.test(emailAddress.value)== false, emailAddress, error3, message3);
});

dateOfBirth.addEventListener('change', function() {
    fieldValidate(dateOfBirth.value=="", dateOfBirth, error4, message4);
});

numberOfGamesPlayed.addEventListener('click', function() {
    fieldValidate(numberOfGamesPlayed.value=="", numberOfGamesPlayed, error5, message5);
});

conditionsCheck.addEventListener('change', function() {
    fieldValidate(conditionsCheck.checked == false, conditionsCheck, error7, message7);
});


// Function : choose location

function locationValidate() {
    let checked = false;
    for (let i = 0; i < locationCheck.length; i++) {
        if(locationCheck[i].checked == "true") {
            checked = true;
        }
    }
    if (checked){
        error6.style.display = "none";
        error6.textContent = "";
    }
    else{
        error6.style.display = "block";
        error6.textContent = "Vous devez choisir une ville";
    }
}


// Submit form

const formulaire = document.getElementById("formulaire");
/*const registrationScreen = document.getElementsByClassName("bground");
const thankyouScreen = document.getElementsByClassName("bground-2");*/

function registrationConfirm() {
    formulaire.style.display = "none";
    thankyouScreen.style.display = "block";
  }

function validate(event) { 
    locationValidate ();
    event.preventDefault();
    if (fieldValidate(firstName.value.length<2 || regexName.test(firstName.value)== false, firstName, error1, message1) &&
        fieldValidate(lastName.value.length<2 || regexName.test(lastName.value)== false, lastName, error2, message2) &&
        fieldValidate(emailAddress.value=="" || regexEmail.test(emailAddress.value)== false, emailAddress, error3, message3) &&
        fieldValidate(dateOfBirth.value=="", dateOfBirth, error4, message4) &&
        fieldValidate(numberOfGamesPlayed.value=="", numberOfGamesPlayed, error5, message5) &&
        locationValidate(conditionsCheck.checked == false, conditionsCheck, error7, message7)){
            registrationConfirm ();
    }
}



  
























