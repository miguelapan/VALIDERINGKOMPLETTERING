const regForm         =   document.querySelector('#validationForm');
const firstName       =   document.querySelector('#firstName');
const lastName        =   document.querySelector('#lastName');
const email           =   document.querySelector('#email');
const password        =   document.querySelector('#password');
const rePassword      =   document.querySelector('#repeatPassword');
const errorMessage    =   document.querySelector('#errorMessage');

const errorE = []

const ecode = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const passcode  = /[a-z]{6,}/;
const namecode  = /[0-9]/;



const valName = (input) => {
    if(input.value.trim() === ''){
        console.log('RUTAN ÄR TOM');
        errorMessage.classList.remove('d-none');
        return false;
    }else if(input.value.length < 2){
        console.log('Namnet måste vara minst två tecken');
        errorMessage.classList.remove('d-none');
        return false;}
        else if(input.value.match(namecode)){
            console.log('FÅR EJ VARA SIFFROR I NAMNET ');
            errorMessage.classList.remove('d-none');
            return false;
        }
        return true;
}
const valEmail = (input) => {
    if(input.value.trim() === ''){
        console.log('EMAIL ÄR TOM');
        errorMessage.classList.remove('d-none');
        return false;
    }else if(!input.value.match(ecode)){
        console.log('PASSWORD NOT VALID');
        errorMessage.classList.remove('d-none');
        return false;}
        return true;
}
const valPass = (input) => {
    if(input.value === ''){
        console.log('PASSWORD ÄR TOM');
        errorMessage.classList.remove('d-none');
        return false;
    }else if(!input.value.match(passcode)){
        console.log('LÖSENORD MÅSTE HA MINST 6 BOKSTÄVER');
        errorMessage.classList.remove('d-none');
        return false;
    }else if(password.value !== rePassword.value){
        console.log('LÖSENORDEN MÅSTE MATCHA');
        errorMessage.classList.remove('d-none');
        return false;
    }
        return true;
}




regForm.addEventListener('submit', e =>{
    e.preventDefault();

const firstNameCheck    = valName(firstName)
const lastNameCheck     = valName(lastName)
const emailCheck        = valEmail(email)
const passwordCheck     = valPass(password)
const rePasswordCheck   = valPass(rePassword)

const user = {
    FirstName:  firstName.value,
    LastName:   lastName.value,
    Email:      email.value,
    Password:   password.value

}

if(firstNameCheck && lastNameCheck && emailCheck && passwordCheck && rePasswordCheck){
    errorMessage.classList.add('d-none');
    console.log('success');
    console.log(user);
}
else{
    if(!firstNameCheck){
        console.log('Fel på rad first name');
    }
    if(!lastNameCheck){
        console.log('Fel på rad last name');
    }
    if(!emailCheck){
        console.log('Fel på rad email');
    }
    if(!passwordCheck){
        console.log('Fel på rad password');
    }
    if(!rePasswordCheck){
        console.log('Fel på rad rePassword');
    }
}
})





//     Förhindra sidan att laddas om när formuläret ska valideras.
//     Validera alla fälten så att alla fält måste ha ett innehåll 
//     och checkrutan måste klickas i.
//     Om något av fälten inte är ifyllda eller checkrutan 
//     inte är iklickad så ska du logga ett felmeddelande i 
//     consolen där du skriver att någonting har gått fel.

//     Om valideringen går igenom så ska du istället logga ut ett 
//     success meddelande i consolen och skapa ett user objekt som 
//     har följande fält: firstName, lastName, email, password. 
//     Detta objekt ska också skrivas ut i consolen



// För väl godkänt ska du även göra följande:


//     Alla fälten ska valideras så att korrekt information skriv in. 
//     ( email måste consta en emailadress, lösenorden måste matcha 
//         constandra samt ha en längd på minst 6 och ett namn ska 
//         inte få consta kortare än 2 bokstäver samt inte innehålla 
//         några siffror)

//     Om det är något fel i valideringen så ska du visa texten i 
//     validation-feedback diven längst ner i formuläret genom att 
//     ta bort klassen d-none på p taggen.
//     Du ska även consol logga ett meddelande med vilket av 
//     fälten som inte är korrekt ifyllda.
//     När man har fyllt i alla fälten korrekt 
//     och trycker på "validate" så ska du dölja felmeddelandet 
//     längst ner igen och även skriva ut ett success meddelande i 
//     consolen och skapa ett user objekt som har följande 
//     fält: firstName, lastName, email, password. 
//     Detta objekt ska också skrivas ut i consolen