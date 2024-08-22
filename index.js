// Select necessary DOM elements
const crossBtn = document.querySelector(".cross-btn");
const gameRule = document.querySelector(".games-rule");
const ruleBtn = document.querySelector(".rules-btn");

const cmpScore = document.getElementsByClassName("cmp-score")[0];
const urScore = document.getElementsByClassName("ur-score")[0];

const buttons = document.querySelectorAll(".icon");

// Initialize scores from localStorage or set to 0 if not available
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
let yourScore = parseInt(localStorage.getItem("yourScore")) || 0;

// Display initial scores
cmpScore.innerText = computerScore;
urScore.innerText = yourScore;

// Array to hold possible choices for the computer
const computerChoices = ["rock", "paper", "scissor"];

// Function to randomly select the computer's choice
function computerSelect() {
  return computerChoices[Math.floor(Math.random() * 3)];
}

// Function to handle the game result based on user choice and computer choice
function playGame(userChoice) {
  const computerChoice = computerSelect();
  console.log("PC chose:", computerChoice);
  console.log("You chose:", userChoice);

  // Check for a tie
  if (userChoice === computerChoice) {
    console.log("It's a tie!");
    localStorage.setItem("userChoice", userChoice);
    localStorage.setItem("computerChoice", computerChoice);
    navigateToResultPage("tie.html");
  }
  // Check if the user wins
  else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("You win!");
    yourScore += 1;
    urScore.innerText = yourScore;
    localStorage.setItem("yourScore", yourScore);
    localStorage.setItem("userChoice", userChoice);
    localStorage.setItem("computerChoice", computerChoice);
    navigateToResultPage("won.html");
  }
  // Otherwise, the computer wins
  else {
    console.log("PC wins!");
    computerScore += 1;
    cmpScore.innerText = computerScore;
    localStorage.setItem("computerScore", computerScore);
    localStorage.setItem("userChoice", userChoice);
    localStorage.setItem("computerChoice", computerChoice);
    navigateToResultPage("lose.html");
  }
}

// Function to navigate to the result page
function navigateToResultPage(page) {
  window.location.href = `./pages/${page}`;
}

// Attach event listeners to the game buttons (rock, paper, scissor)
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playGame(this.id);
  });
});

// Handle the display of game rules
crossBtn.addEventListener("click", () => {
  gameRule.style.visibility = "hidden";
  crossBtn.style.visibility = "hidden";
});

ruleBtn.addEventListener("click", () => {
  gameRule.style.visibility = "visible";
  crossBtn.style.visibility = "visible";
});
