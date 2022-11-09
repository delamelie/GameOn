// Access to DOM Elements

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const emailAddress = document.querySelector("#email");
const dateOfBirth = document.querySelector("#birthdate");
const numberOfGamesPlayed = document.querySelector("#quantity");
const locationCheck = document.querySelectorAll(".location-checkbox");
const conditionsCheck = document.querySelector("#checkbox1");
const error1 = document.querySelector("#error1");
const error2 = document.querySelector("#error2");
const error3 = document.querySelector("#error3");
const error4 = document.querySelector("#error4");
const error5 = document.querySelector("#error5");


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
    if(condition){
        error.style.display = "block";
        name.classList.add ("border-invalid");
        error.textContent = message;
    }else{
        error.style.display = "none";
        error.textContent = "";
        name.classList.remove ("border-invalid");
        /*return true;*/
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

numberOfGamesPlayed.addEventListener('change', function() {
    fieldValidate(numberOfGamesPlayed.value=="", numberOfGamesPlayed, error5, message5);
});

conditionsCheck.addEventListener('click', function() {
    fieldValidate(conditionsCheck.checked == false, conditionsCheck, error7, message7);
});


// Function : choose location

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
        return true;
    }
    else{
        error6.style.display = "block";
        error6.textContent = "Vous devez choisir une ville";
    }
}

locationCheck.forEach((location) => location.addEventListener('change', locationValidate));


// Submit form

const registrationWindow = document.querySelector(".bground");
const confirmationWindow = document.querySelector(".bground-2");
/*const submitBtn = document.querySelector(".btn-submit");*/

function registrationConfirm() {
    registrationWindow.style.display = "none";
    confirmationWindow.style.display = "block";
  }

function validate(event) { 
    event.preventDefault();
    if (fieldValidate(firstName.value.length<2 || regexName.test(firstName.value)== false, firstName, error1, message1) &&
        fieldValidate(lastName.value.length<2 || regexName.test(lastName.value)== false, lastName, error2, message2) &&
        fieldValidate(emailAddress.value=="" || regexEmail.test(emailAddress.value)== false, emailAddress, error3, message3) &&
        fieldValidate(dateOfBirth.value=="", dateOfBirth, error4, message4) &&
        fieldValidate(numberOfGamesPlayed.value=="", numberOfGamesPlayed, error5, message5) &&
        locationValidate()){
            registrationConfirm();
    }else{
        setTimeout(function() {
            alert("Veuillez remplir tous les champs du formulaire");
        }, 200);
    }
}

/*submitBtn.addEventListener('onsubmit', validate);*/






  
























