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

function playerOption() {
  let playerOption = prompt("Enter your option: 1-rock, 2-paper, 3-scissors");
  if (playerOption == 1) {
    playerOption = "rock";
    return playerOption;
  } else if (playerOption == 2) {
    playerOption = "paper";
    return playerOption;
  } else if (playerOption == 3) {
    playerOption = "scissors";
    return playerOption;
  }
  console.log("Player option: " + playerOption);
}

function game() {
  let rounds = 5;
  let playerScore = 0;
  let botScore = 0;

  do {
    let playeropt = playerOption();
    let botopt = botOption();
    console.log("Player option: " + playeropt);
    console.log("Bot option: " + botopt);

    if (playeropt == "rock" && botopt == "scissors") {
      console.log("Player wins!");
      playerScore++;
    } else if (playeropt == "rock" && botopt == "paper") {
      console.log("Bot wins!");
      botScore++;
    } else if (playeropt == "paper" && botopt == "rock") {
      console.log("Player wins!");
      playerScore++;
    } else if (playeropt == "paper" && botopt == "scissors") {
      console.log("Bot wins!");
      botScore++;
    } else if (playeropt == "scissors" && botopt == "paper") {
      console.log("Player wins!");
      playerScore++;
    } else if (playeropt == "scissors" && botopt == "rock") {
      console.log("Bot wins!");
      botScore++;
    } else {
      console.log("Draw!");
    }

    rounds--;
  } while (rounds > 0);

  if (playerScore > botScore) {
    console.log("Player wins the game!");
  } else if (botScore > playerScore) {
    console.log("Bot wins the game!");
  } else {
    console.log("It's a draw!");
  }
}

