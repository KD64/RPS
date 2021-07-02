console.log("Imagine losing at rock paper scissors..")


function computerPlay(){
    //generates a random number and assigns RPS dependant on number range
    //~0.01 - 0.33 = rock, 0.34 - 0.66 = paper, 0.67 - 0.99 = scissors
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
    //compares player and cpu values, logs round result and increments winner score by 1
    
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            console.log("You Lose! Paper beats Rock");
            return cScore++;
        }
        else if(computerSelection == "scissors"){
            console.log("You Win! Rock beats Scissors");
            return pScore++;
        }
        else{
            return console.log("Draw! Both picks were Rock");
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "paper"){
            return console.log("Draw! Both picks were Paper");
        }
        else if(computerSelection == "scissors"){
            console.log("You Lose! Scissors beats Paper");
            return cScore++;
        }
        else{
            console.log("You Win! Paper beats Rock");
            return pScore++;
        }
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            console.log("You Win! Scissors beats Paper");
            return pScore++;
        }
        else if(computerSelection == "scissors"){
            return console.log("Draw! Both picks were Scissors");
        }
        else{
            console.log("You Lose! Rock beats Scissors");
            return cScore++;
        }
    }
    else{
        return console.log("What?");
    }
}




function game(){
     //plays 5 rounds of RPS whilst tracking score between rounds   
     for (let i = 0; i < 5; i++) {
        playerSelection = prompt().toLowerCase();
        computerSelection = computerPlay();
        
        
        playRound(playerSelection, computerSelection);
        console.log("Score - Player: " + pScore + ", Computer: " + cScore);
            }
}    

let pScore = 0;
let cScore = 0;
game();    