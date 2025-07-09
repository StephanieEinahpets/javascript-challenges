const symbols = ["𖤐", "☀︎", "⏾"];
let balance = 100;

function spinReels() {
  return new Promise((resolve) => {
    const result = [
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
    ];
    resolve(result);
  });
}

function getPayout(result, bet) {
  const [a, b, c] = result;
  if (a === b && b === c) {
    if (a === "𖤓") return bet * 50;
    if (a === "⏾") return bet * 30;
    if (a === "𖤐") return bet * 20;
  } else if (a === b || b === c || a === c) {
    return bet * 2;
  }
  return 0;
}

function displaySpin(result) {
  console.log("  " + symbols.join(" ") + "\n");
  console.log("[ " + result.join(" ") + " ] <--\n");
  console.log("  " + result.join(" "));
}

async function playGame() {
  console.log("Let's play some slots!");
  while (balance > 0) {
    let input = prompt(`Your balance: $${balance}. Enter bet amount:`);
    if (input === null) {
      console.log("Game exited.");
      break;
    }
    const bet = parseInt(input);
    if (isNaN(bet) || bet <= 0 || bet > balance) {
      console.log("Invalid bet. Try again.");
      continue;
    }
    const result = await spinReels();
    const payout = getPayout(result, bet);
    balance = balance - bet + payout;
  }
}
