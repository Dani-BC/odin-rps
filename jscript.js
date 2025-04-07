let rounds = 0;
let playerScore = 0;
let botScore = 0;

function randondNumber(max) {
  return Math.floor(Math.random() * max);
}

function botOption() {
  let botOption = randondNumber(3);
  if (botOption == 0) {
    document.getElementById("computerChoice").src = "img/rock.png";
    return "rock";
  } else if (botOption == 1) {
    document.getElementById("computerChoice").src = "img/paper.png";
    return "paper";
  } else {
    document.getElementById("computerChoice").src = "img/scissor.png";
    return "scissors";
  }
}

function playRound(playerOption) {

  if(playerOption == "rock"){
    document.getElementById("playerChoice").src = "img/rock.png";
  }
    else if(playerOption == "paper"){
    document.getElementById("playerChoice").src = "img/paper.png";
    }
    else{
      document.getElementById("playerChoice").src = "img/scissor.png";
    }

  let botopt = botOption();

  console.log("Player option: " + playerOption);
  console.log("Bot option: " + botopt);

  if (playerOption == "rock" && botopt == "scissors") {
    console.log("Player wins!");
    playerScore++;
  } else if (playerOption == "rock" && botopt == "paper") {
    console.log("Bot wins!");
    botScore++;
  } else if (playerOption == "paper" && botopt == "rock") {
    console.log("Player wins!");
    playerScore;
  } else if (playerOption == "paper" && botopt == "scissors") {
    console.log("Bot wins!");
    botScore++;
  } else if (playerOption == "scissors" && botopt == "paper") {
    console.log("Player wins!");
    playerScore++;
  } else if (playerOption == "scissors" && botopt == "rock") {
    console.log("Bot wins!");
    botScore++;
  } else {
    console.log("Draw!");
  }
  rounds++;
  document.getElementById("rounds").innerHTML = "Rounds: " + rounds;
  document.getElementById("playerScore").innerHTML =
    "Player Score: " + playerScore;
  document.getElementById("computerScore").innerHTML = "Bot Score: " + botScore;
}
