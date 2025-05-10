console.log("Welcome to the console")

let sonicOutputElement = document.getElementById("sonic-output");

let sonicFact = document.getElementById("sonic-fact");

sonicFact.addEventListener("click", sonicFactEventHandler);

function  sonicFactEventHandler(event){
    event.preventDefault();
    sonicOutputElement.innerHTML = 'In the archie comics Sonics canon name is Olgilvie Maurice Hedgehog.'
}

let splatoonOutputElement = document.getElementById("splatoon-output");

let splatoonFact = document.getElementById("splatoon-fact");

splatoonFact.addEventListener("click", splatoonFactEventHandler);

function  splatoonFactEventHandler(event){
    event.preventDefault();
    splatoonOutputElement.innerHTML = 'There are 8 agents in total within the game.'
}