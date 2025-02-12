let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  draws: 0,
};

let result;

function printScore() {
  let show = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;

  document.getElementById("score").innerHTML = show;
}

function printFeedback(playerMove, computerMove) {
  document.getElementById(
    "feedback"
  ).innerHTML = `You: ${playerMove} | Computer: ${computerMove}`;
}

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    draws: 0,
  };
  localStorage.setItem("score", JSON.stringify(score));

  printScore();
  document.getElementById("feedback").innerHTML = "";
}

function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playGame(playerMove) {
  let computerMove = computerChoice();
  let outcomes = {
    rock: { rock: 0, paper: -1, scissors: 1 },
    paper: { rock: 1, paper: 0, scissors: -1 },
    scissors: { rock: -1, paper: 1, scissors: 0 },
  };

  let result = outcomes[playerMove][computerMove];

  if (result === 1) {
    score.wins++;
  } else if (result === -1) {
    score.losses++;
  } else {
    score.draws++;
  }

  printScore();
  localStorage.setItem("score", JSON.stringify(score));
  printFeedback(playerMove, computerMove);
}
printScore();
