function getComputerChoice(){
    return Math.floor((Math.random() * 3) + 1);
}

function getPlayerChoice(){
    return prompt("Enter your choice: 1=Rock, 2=Paper, 3=Scissor");
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("tie");
        return "tie";
    }
    else if(playerSelection ==1 && computerSelection ==2){
        console.log("You lose!");
        return "lose";
    }
    else if(playerSelection ==2 && computerSelection ==3){
        console.log("You lose!");
        return "lose";
    }
    else if(playerSelection ==3 && computerSelection ==1){
        console.log("You lose!");
        return "lose";
    }
    else{
        console.log("You Win!");
        return "win";
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    while(scoreComputer<5 && scorePlayer<5){
        let x = getPlayerChoice();
        let y = getComputerChoice();
        console.log(y);
        let result = playRound(x,y);
        if(result === "win"){
            scorePlayer +=1;
        }
        else if(result === "lose"){
            scoreComputer +=1;
        }
        else{
        }
    }
    console.log("Your score: "+ scorePlayer);
    console.log("Computer score: "+ scoreComputer);
}