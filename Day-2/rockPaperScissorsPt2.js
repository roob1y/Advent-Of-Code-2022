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

x: lose
y: draw
z: win

*/

const moves = {
  A: "rock",
  B: "paper",
  C: "scissors",
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
  if (moves[formattedValues[0]] === "rock") {
    if (formattedValues[1] === "X") {
      return accumulator + outcomeScore.lost + roundScore.scissors;
    }
    if (formattedValues[1] === "Y") {
      return accumulator + outcomeScore.draw + roundScore.rock;
    }
    if (formattedValues[1] === "Z") {
      return accumulator + outcomeScore.win + roundScore.paper;
    }
  }
  if (moves[formattedValues[0]] === "paper") {
    if (formattedValues[1] === "X") {
      return accumulator + outcomeScore.lost + roundScore.rock;
    }
    if (formattedValues[1] === "Y") {
      return accumulator + outcomeScore.draw + roundScore.paper;
    }
    if (formattedValues[1] === "Z") {
      return accumulator + outcomeScore.win + roundScore.scissors;
    }
  }
  if (moves[formattedValues[0]] === "scissors") {
    if (formattedValues[1] === "X") {
      return accumulator + outcomeScore.lost + roundScore.paper;
    }
    if (formattedValues[1] === "Y") {
      return accumulator + outcomeScore.draw + roundScore.scissors;
    }
    if (formattedValues[1] === "Z") {
      return accumulator + outcomeScore.win + roundScore.rock;
    }
  }
  return accumulator;
}, initialValue);

console.log("My Score Total: ", scoreTotal);
