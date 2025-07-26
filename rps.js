const buttons = document.querySelectorAll('.choices button');
const resultDiv = document.getElementById('result');
const playAgainContainer = document.getElementById('playAgainContainer');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  let resultMessage = `You selected ${userChoice}. Computer selected ${computerChoice}. `;

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage += "<strong>You WIN!</strong>";
  } else if (userChoice === computerChoice) {
    resultMessage += "<strong>It's a TIE!</strong>";
  } else {
    resultMessage += "<strong>Computer WINS!</strong>";
  }

  resultDiv.innerHTML = resultMessage;
  playAgainContainer.style.display = 'block';
  buttons.forEach(btn => btn.disabled = true);
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    playRound(button.dataset.choice);
  });
});

yesBtn.addEventListener('click', () => {
  resultDiv.innerHTML = '';
  playAgainContainer.style.display = 'none';
  buttons.forEach(btn => btn.disabled = false);
});

noBtn.addEventListener('click', () => {
  resultDiv.innerHTML = '<strong>Thank you for playing!</strong>';
  playAgainContainer.style.display = 'none';
});
