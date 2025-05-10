console.log("Welcome to the console")

let sonicFactElement = document.getElementById("sonic-fact");

let sonicOutput = document.getElementById("sonic-output");

sonicOutput.addEventListener("click", sonicOutputEventHandler);

function  sonicOutputEventHandler(event){
    event.preventDefault();
    sonicFactElement.innerHTML = 'In the archie comics Sonics canon name is Olgilvie Maurice Hedgehog.'
}

let splatoonFactElement = document.getElementById("splatoon-fact");

let splatoonOutput = document.getElementById("splatoon-output");

splatoonOutput.addEventListener("click", splatoonOutputEventHandler);

function  splatoonOutputEventHandler(event){
    event.preventDefault();
    splatoonFactElement.innerHTML = 'There are 8 agents in total within the game.'
}