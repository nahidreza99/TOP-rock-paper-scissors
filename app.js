function getComputerChoice(){
    return Math.floor((Math.random() * 3) + 1);
}

function getPlayerChoice(){
    return prompt("Enter your choice: 1=Rock, 2=Paper, 3=Scissor");
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("draw");
        return false;
    }
    else if(playerSelection ==1 && computerSelection ==2){
        console.log("You lose!");
        return false;
    }
    else if(playerSelection ==2 && computerSelection ==3){
        console.log("You lose!");
        return false;
    }
    else if(playerSelection ==3 && computerSelection ==1){
        console.log("You lose!");
        return false;
    }
    else{
        console.log("You Win!");
        return true;
    }
}

function game(){
    let count = 0;
    for(let i=0;i<5;i++){
        let x = getPlayerChoice();
        let y = getComputerChoice();
        console.log(y);
        let result = playRound(x,y);
        if(result){
            count +=1;
        }
    }
    console.log("Score: "+ count);
}