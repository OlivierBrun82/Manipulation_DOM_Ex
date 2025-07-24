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

const sendBtn = document.getElementById("sendBtn");
// console.log(sendBtn);

function getValue(){
    // récupérer la valeur (Value), dans l'input.
    const inputAge = document.getElementById("age");
    const inputTxt = document.getElementById("txt");
    //  récupère la value age et du texte
    const age = inputAge.value;
    const txt = inputTxt.value;
    // console.log(age, txt);

    // Generate a span element
    const span = document.createElement("span");

    // Declare a variable type
    let type;
    // If age is = or + 18
    if (age >= 18 ) {
    // We call back the var type to record a string
       type = "majeur";

    //  if first condition is met or else
    }else{
    // We call back the var type to record a string
        type = "mineur";
    }

    // We change textContent of my element span that we previously registered
    span.textContent = "Tu a " + age +  " ans, tu es " + type;
    // With the function appendChild we inject the element span  in the alertContainer
    document.getElementById("alertContainer").appendChild(span);
}

// genere un élement html qui contiet notre :essage "[AGE] tu est [mineur/adult]"


// function adultOrNot() {
//     let result;
//     if (age > 17) {
//         result = "adult";
//     } else {
//         result = "mineur";
//     }
//     return result;
// }

// console.log(adultOrNot());

//  écoute le clique sur le bouton id sendBtn
sendBtn.addEventListener("click", getValue);