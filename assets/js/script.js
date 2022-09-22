//Wait for the DOM to finish before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoad", function(){
    let buttons = document.getElementsByTagName("button");
   
    //iterate and for loop to get the individual element from the array

    for (let button of buttons) { 
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert ("You cliked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    } 
})

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

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