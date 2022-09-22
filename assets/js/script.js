//Wait for the DOM to finish before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoad", function() {
    let buttons = document.getElementsByTagName("button");
   
    for (let button of buttons) { 
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You cliked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    } 
})

/**
 * The main game "loop" called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(){
    //Create two random numbers between 1 and 25
    let num1 = math.floor(math.random() * 25) + 1;
    let num2 = math.floor(math.random() * 25) + 1;
}

function checkAnswer(){

}

/**
 * Get the operands (the number) and the operator (plus, minus, etc.)
 * directly from the DOM and return the correct answer
 */

function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`
    }
}

function incrementScore(){

}

function incrementAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){
    
}
