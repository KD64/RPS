console.log("Imagine losing at rock paper scissors..")


function computerPlay(){
    //generates a random number and assigns RPS dependant on number range
    //0.01 - 0.33 = rock, 0.34 - 0.66 = paper, 0.67 - 0.99 = scissors
    let ranNum = Math.random();
    //console.log(ranNum);
    if(ranNum < 0.34){
        return "rock";
    }
    else if(ranNum < 0.67){
        return "paper";
    }
    else{
        return "scissors";
    }

}

function playRound(playerSelection, computerSelection){
    
    //playerSelection = prompt().toLowerCase();
    //computerSelection = computerPlay();
    
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return "You Lose! Paper beats Rock";
        }
        else if(computerSelection == "scissors"){
            return "You Win! Rock beats Scissors";
        }
        else{
            return "Draw! Both picks were Rock";
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "paper"){
            return "Draw! Both picks were Paper";
        }
        else if(computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper";
        }
        else{
            return "You Win! Paper beats Rock";
        }
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            return "You Win! Scissors beats Paper";
        }
        else if(computerSelection == "scissors"){
            return "Draw! Both picks were Scissors";
        }
        else{
            return "You Lose! Rock beats Scissors";
        }
    }
    else{
        return "What?";
    }
}

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection)); 

function game(){
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
}        