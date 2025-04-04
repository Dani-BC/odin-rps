
function randondNumber(max) {
    return Math.floor(Math.random() * max);
}

function botOption() {
    let botOption = randondNumber(3);
    if (botOption == 0) {
        return "rock";
    } else if (botOption == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playerOption(){ 
    let playerOption = prompt("Enter your option: 1-rock, 2-paper, 3-scissors");
    if(playerOption == 1) {
        playerOption = "rock";
        return playerOption;
    }else if(playerOption == 2) {
        playerOption = "paper";
        return playerOption;
    }else if(playerOption == 3) {
        playerOption = "scissors";
        return playerOption;
    }
    console.log("Player option: " + playerOption);
}

function game(){
    let playeropt = playerOption();
    let botopt = botOption();
    console.log("Player option: " + playeropt);
    console.log("Bot option: " + botopt);

    if(playeropt == "rock" && botopt == "scissors"){
        console.log("Player wins!")
        playagain();
    }else if(playeropt == "rock" && botopt == "paper"){
        console.log("Bot wins!")
        playagain();
    }else if(playeropt == "paper" && botopt == "rock"){
        console.log("Player wins!")
        playagain();
    }else if(playeropt == "paper" && botopt == "scissors"){
        console.log("Bot wins!")
        playagain();
    }else if(playeropt == "scissors" && botopt == "paper"){
        console.log("Player wins!")
        playagain();
    }else if(playeropt == "scissors" && botopt == "rock"){
        console.log("Bot wins!")
        playagain();
    }else{
        console.log("Draw!")
        playagain();
    }
}

function playagain() {
    let playagain = prompt("Do you want to play again? 1-yes, 2-no");

    if(playagain == 1){
        game();
    }
    else{
        console.log("Game ended")
    }
    return 0;
}

console.log(game());