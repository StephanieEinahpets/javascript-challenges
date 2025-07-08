const prompt = require("prompt-sync")();

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];

  while (true) {
    let userChoice = prompt(
      "Rock, paper, or scissors? (type 'stop' to quit)  "
    );
    userChoice = userChoice.trim().toLowerCase();

    if (userChoice === "stop" || userChoice === "quit") {
      console.log("\nCome play again soon!");
      break;
    }
    if (!choices.includes(userChoice)) {
      console.log("\nInvalid. Please type rock, paper, or scissors.\n");
      continue;
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(
      `\nYou chose: ${userChoice}\nComputer chose: ${computerChoice}`
    );

    if (userChoice === computerChoice) {
      console.log("It's a tie!\n");
      break;
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win!");
      break;
    } else {
      console.log("You lose!\n");
      break;
    }
  }
}

playGame();
