const fs = require("fs");

const inputFile = fs.readFileSync("input.txt", "utf-8").split(/\n/);

// score ----> 1 for Rock, 2 for Paper, and 3 for Scissors

// plus score for  outcome of round ----> 0: lost, 3: draw, 6: win

/* opponent letters -

a: rock
b: paper
c: scissors

*/

/* player letters - 

x: rock
y: paper
z: scissors

*/

const moves = {
  A: "rock",
  B: "paper",
  C: "scissors",
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

const roundScore = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const outcomeScore = {
  lost: 0,
  draw: 3,
  win: 6,
};

const initialValue = 0;

const scoreTotal = inputFile.reduce((accumulator, currentValue) => {
  const formattedValues = currentValue.split(" ");
  if (moves[formattedValues[0]] === moves[formattedValues[1]]) {
    return accumulator + outcomeScore.draw + roundScore[moves[formattedValues[1]]];
  }
  if (moves[formattedValues[1]] === "rock" ) {
    if (moves[formattedValues[0]] === "paper"){
      return accumulator + outcomeScore.lost + roundScore[moves[formattedValues[1]]]
    }
    if (moves[formattedValues[0]] === "scissors"){
      return accumulator + outcomeScore.win + roundScore[moves[formattedValues[1]]]
    }
  }
  if (moves[formattedValues[1]] === "paper" ) {
    if (moves[formattedValues[0]] === "rock"){
      return accumulator + outcomeScore.win + roundScore[moves[formattedValues[1]]]
    }
    if (moves[formattedValues[0]] === "scissors"){
      return accumulator + outcomeScore.lost + roundScore[moves[formattedValues[1]]]
    }
  }
  if (moves[formattedValues[1]] === "scissors" ) {
    if (moves[formattedValues[0]] === "paper"){
      return accumulator + outcomeScore.win + roundScore[moves[formattedValues[1]]]
    }
    if (moves[formattedValues[0]] === "rock"){
      return accumulator + outcomeScore.lost + roundScore[moves[formattedValues[1]]]
    }
  }
  return accumulator
}, initialValue);

console.log("My Score Total: ", scoreTotal);
