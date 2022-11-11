VALID_CHOICES = ['rock', 'paper', 'scissors'];

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
let choice = readline.question();

while (!VALID_CHOICES.includes(choice)) {
  prompt('That is not a valid choice. Please try again.');
  choice = readline.question();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

prompt(`You chose ${choice}. The computer chose ${computerChoice}.`);
