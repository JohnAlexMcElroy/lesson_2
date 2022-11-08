// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation


const READLINE = require('readline-sync');

console.log("Welcome to the calculator!");

console.log("What is the first number?");
let number1 = READLINE.question();

console.log("What is the second number?");
let number2 = READLINE.question();

console.log("Which operation would you like to perform? \n1) Add\n2) Subtract\n3) Muiltiply\n4) Divide");
let operation = READLINE.question();

let output;
if (operation === "1") {
  output = Number(number1) + Number(number2);
} else if (operation === "2") {
  output = Number(number1) - Number(number2);
} else if (operation === "3") {
  output = Number(number1) * Number(number2);
} else if (operation === "4") {
  output = Number(number1) / Number(number2);
} else {
  console.log("Please select one of the four options.");
}
console.log(`The result is ${output}.`)
