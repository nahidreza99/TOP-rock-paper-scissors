let game = 0;

const delay = ms => new Promise(res => setTimeout(res, ms));
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const comment = document.getElementById("comment");
const robot = document.getElementById("robot");
const scoreBoardPlayer = document.getElementById("scorePlayer");
const scoreBoardComputer = document.getElementById("scoreComputer");
const buttons = document.getElementsByClassName("buttons");
const computerRound = document.getElementById("computer-round");
const playerRound = document.getElementById("player-round");

let playerScore = 0;
let computerScore = 0;

scoreBoardComputer.innerHTML = computerScore;
scoreBoardPlayer.innerHTML = playerScore;

rock.addEventListener("click", () => handleClick("rock"));
paper.addEventListener("click", () => handleClick("paper"));
scissor.addEventListener("click", () => handleClick("scissor"));

function getComputerChoice(){
    var x = Math.floor((Math.random() * 3) + 1);
    if(x==1){
        computerRound.innerHTML = '<img src="rock-svgrepo-com.svg" alt="">'
        return "rock";
    }
    if(x==2){
        computerRound.innerHTML = '<img src="page-filled-svgrepo-com.svg" alt="">'
        return "paper";
    }
    if(x==3){
        computerRound.innerHTML = '<img src="scissor-filled-opened-tool-svgrepo-com.svg" alt="">'
        return "scissor";
    }
}

async function handleClick(playerChoice){
    if(game){
        switch(playerChoice){
            case "rock":
                rock.classList.add("spin");
                playerRound.innerHTML = '<img class="buttons" src="rock-svgrepo-com.svg" alt="">';
                playRound("rock");
                await delay(510);
                rock.classList.remove("spin");
                break;
            case "paper":
                paper.classList.add("spin");
                playerRound.innerHTML = '<img class="buttons" src="page-filled-svgrepo-com.svg" alt="">';
                playRound("paper");
                await delay(510);
                paper.classList.remove("spin");
                break;
            case "scissor":
                scissor.classList.add("spin");
                playerRound.innerHTML = '<img class="buttons" src="scissor-filled-opened-tool-svgrepo-com.svg" alt="">';
                playRound("scissor");
                await delay(510);
                scissor.classList.remove("spin");
                break;
        }
    }
}

function playRound(playerSelection){
    let computerSelection = getComputerChoice();

    if(playerSelection === computerSelection){
        console.log("tie");
        comment.classList.add('pre-animation');
        comment.innerHTML = "Oh, that was a tie.";
        updateScore(0,0);
        setTimeout(function(){
            comment.classList.remove('pre-animation')
        },250);
        return;
    }
    else if(playerSelection =="rock" && computerSelection =="paper"){
        console.log("You lose!");
        comment.classList.add('pre-animation');
        comment.innerHTML = "Nice try, but the computer selected paper.";
        updateScore(0,1);
        setTimeout(function(){
            comment.classList.remove('pre-animation')
        },250);
        return;
    }
    else if(playerSelection =="paper" && computerSelection =="scissor"){
        console.log("You lose!");
        comment.classList.add('pre-animation');
        comment.innerHTML = "Oh no, scissor cuts through paper.";
        updateScore(0,1);
        setTimeout(function(){
            comment.classList.remove('pre-animation')
        },250);
        return;
    }
    else if(playerSelection =="scissor" && computerSelection =="rock"){
        console.log("You lose!");
        comment.classList.add('pre-animation');
        comment.innerHTML = "Damn, rock smashed the scissor";
        updateScore(0,1);
        setTimeout(function(){
            comment.classList.remove('pre-animation')
        },250);
        return;
    }
    else{
        console.log("You Win!");
        
        comment.classList.add('pre-animation');
        comment.innerHTML = "Good job. You beat the computer.";
        updateScore(1,0);
        setTimeout(function(){
            comment.classList.remove('pre-animation')
        },250);
        return;
    }
}

function updateScore(p, c){
    playerScore += p;
    computerScore += c;
    scoreBoardComputer.innerHTML = computerScore;
    scoreBoardPlayer.innerHTML = playerScore;
    if(playerScore == 5){
        endGame("player");
        return;
    }
    if(computerScore == 5){
        endGame("computer");
        return;
    }
}

function endGame(winner){

    switch(winner){
        case "player":
            comment.classList.add('pre-animation');
            comment.innerHTML = "Congratulations! You won.";
            setTimeout(function(){
                comment.classList.remove('pre-animation')
            },250);
            break;
        case "computer":
            comment.classList.add('pre-animation');
            comment.innerHTML = "Sorry! You lost."
            setTimeout(function(){
                comment.classList.remove('pre-animation')
            },250);
            break;
    }

    game = 0;

    for(btn of buttons){
        btn.classList.remove("pointer");
    }

    return;
}

function newGame(){
    playerScore = 0;
    computerScore = 0;
    
    game = 1;

    for(btn of buttons){
        btn.classList.add("pointer");
    }

    computerRound.innerHTML = "";
    playerRound.innerHTML = "";
    scoreBoardComputer.innerHTML = computerScore;
    scoreBoardPlayer.innerHTML = playerScore;
    comment.classList.add('pre-animation');
    comment.innerHTML = "Choose an option";
    setTimeout(function(){
        comment.classList.remove('pre-animation')
    },250);
}
