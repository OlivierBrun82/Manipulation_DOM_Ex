// on appel le main par son id

let bodyElement = document.getElementById("mainElement")
// console.log(mainElement);

// on créer une variable pour le bouton dont l'id est "switchBtn"
const switchBtn = document.getElementById("switchBtn");
// console.log(switchBtn);

// on créer la function switchDeg où l'on encapsule le code pour passer d'un style propre à un style dégueu

function switchDeg() {
    mainElement.classList.toggle("mainElement");
};
// console.log(mainElement);


switchBtn.addEventListener("click", switchDeg);
// console.log(switchBtn);


// ---------------------
// Shut up, it's Magic!
// ---------------------


let paraElement = document.getElementById("bilbO")
// console.log(paraElement);

// on créer une var pour le bouton dont l'id est "magicBtn"
const magicBtn = document.getElementById("magicBtn");
// console.log(magicBtn);

// On Créer la fonction  ...
function bilbO() {
    paraElement.classList.toggle("bilbO");
};

magicBtn.addEventListener("click", bilbO);

// ------------------------------
//  Récupératon d'info formulaire
// ------------------------------

const sendBtn = document.getElementById("sendBtn")
// console.log(sendBtn);

function getValue(){
    // récupérer la valeur (Value), dans l'input.
    const inputAge = document.getElementById("age")
    const age = inputAge.value;
    console.log(age);
    
}

sendBtn.addEventListener("click", getValue);