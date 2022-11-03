// DOM Elements

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const emailAddress = document.getElementById("email");
const dateOfBirth = document.getElementById("birthdate");
const numberOfGamesPlayed = document.getElementById("quantity");
const locationChoice = document.getElementsByClassName("location-checkbox");
const conditionsOfAcceptance = document.getElementById("checkbox1");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const error4 = document.getElementById("error4");
const error5 = document.getElementById("error5");
const regexName = /^([a-zA-Z- ]+)$/;
const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;


// Event listening

firstName.addEventListener("change", firstNameValidate);
lastName.addEventListener("change", lastNameValidate);
emailAddress.addEventListener("change", emailAddressValidate);
dateOfBirth.addEventListener("change", dateOfBirthValidate);
numberOfGamesPlayed.addEventListener("click", numberOfGamesPlayedValidate);
conditionsOfAcceptance.addEventListener("change", conditionsOfAcceptanceValidate);


/*// Generic function to validate all fields

function fieldValidate(name, error, message) {    
    if(name.value.length<2 || regexName.test(name.value)== false){
        error.style.display = "block";
        name.classList.add ("border-invalid");
        error.textContent = message;
    }else{
        error.style.display = "none";
        error.textContent = "";
        name.classList.remove ("border-invalid");
    }
    return true;
}*/


// First name

function firstNameValidate() {    
    if(firstName.value.length<2 || regexName.test(firstName.value)== false){
        error1.style.display = "block";
        firstName.classList.add ("border-invalid");
        error1.textContent = "Votre prénom doit comporter au moins 2 caractères";
    }else{
        error1.style.display = "none";
        error1.textContent = "";
        firstName.classList.remove ("border-invalid");
    }
    return true;
}


// Last name

function lastNameValidate() {    
    if(lastName.value.length<2 || regexName.test(lastName.value)== false){
        error2.style.display = "block";
        lastName.classList.add ("border-invalid");
        error2.textContent = "Votre nom de famille doit comporter au moins 2 caractères";
    }else{
        error2.style.display = "none";
        error2.textContent = "";
        lastName.classList.remove ("border-invalid");
    }
    return true;
}


// Email address

function emailAddressValidate() {    
    if(emailAddress.value=="" || regexEmail.test(emailAddress.value)== false){
        error3.style.display = "block";
        emailAddress.classList.add ("border-invalid");
        error3.textContent = "Vous devez saisir une adresse e-mail valide";
    }else{
        error3.style.display = "none";
        error3.textContent = "";
        emailAddress.classList.remove ("border-invalid");
    }
    return true;
}


// Birthdate

function dateOfBirthValidate() {    
    if(dateOfBirth.value==""){
        error4.style.display = "block";
        dateOfBirth.classList.add ("border-invalid");
        error4.textContent = "Vous devez indiquer votre date de naissance";
    }else{
        error4.style.display = "none";
        error4.textContent = "";
        dateOfBirth.classList.remove ("border-invalid");
    }
    return true;
}


// Games played

function numberOfGamesPlayedValidate() {    
    if(numberOfGamesPlayed.value==""){
        error5.style.display = "block";
        numberOfGamesPlayed.classList.add ("border-invalid");
        error5.textContent = "Vous devez indiquer le nombre de tournois auquel vous avez participé";
    }else{
        error5.style.display = "none";
        error5.textContent = "";
        numberOfGamesPlayed.classList.remove ("border-invalid");
    }
    return true;
}


// Choose location

function locationValidate() {    
    if(document.getElementById("location1").checked == false){
        error6.style.display = "block";
        document.getElementById("location1").classList.add ("border-invalid");
        error6.textContent = "Vous devez choisir une ville";
    }else{
        error6.style.display = "none";
        error6.textContent = "";
        location.classList.remove ("border-invalid");
    }
    return true;
}

    


// Accept conditions

function conditionsOfAcceptanceValidate() {    
    if(conditionsOfAcceptance.checked == false){
        error7.style.display = "block";
        error7.textContent = "Vous devez accepter les conditions d'utilisation";
        return false;
    }else{
        error7.style.display = "none";
        error7.textContent = "";
        conditionsOfAcceptance.classList.remove ("border-invalid");
    }
    return true;
}


// Submit form

const formulaire = document.getElementById("formulaire");

function validate(event) { 
    event.preventDefault();   
    if (firstNameValidate() &&
    lastNameValidate() &&
    emailAddressValidate () &&
    dateOfBirthValidate () &&
    numberOfGamesPlayed () &&
    conditionsOfAcceptance () ){
    return true;
    }
}



    /*if (radioCheck()===false){
        error.innerHTML = "Vous devez choisir une ville";
        return false;
    }
   



/*
firstName

    
function validatebis(fn, ln) {
    if (fn.value == ""){
        alert("Vous devez saisir votre prénom");
        return false;
    }
    if (ln.value == ""){
        alert("Vous devez saisir votre nom");
        return false;
    }
    return true;
}


// appel fonction

resultatsaisie = validatebis(firstName, lastName)
console.log(resultatsaisie)

/*
document.getElementsByTagName("form").addEventListener("onsubmit", function (e){

if (error){
    e.preventDefault();
    document.error.innerHTML = erreur;
    return false;
    }else{
    alert("Votre inscription a bien été reçue");
    }
}
*/




















