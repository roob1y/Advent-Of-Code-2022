const fs = require("fs");

const inputFile = fs.readFileSync("input.txt", "utf-8").split("\n");

elfCaloriesArr = [];

let index = 0;
let sum = 0;
inputFile.map((foodCal) => {
  if (foodCal === "") {
    elfCaloriesArr[index] = sum;
    index += 1;
    sum = 0;
  }
  sum = sum + +foodCal;
});

const sortedNumbers = elfCaloriesArr.sort((a, b) => a - b).slice(-3);
const sortedNumbersSummed = sortedNumbers.reduce((a, b) => a + b, 0)

console.log(`The Max Number Is... ${Math.max(...elfCaloriesArr)} !!!`);
console.log(`The Highest Three Numbers are... ${sortedNumbers.join(", ")} !!!`);
console.log(`The Total of the Highest Three Numbers are... ${sortedNumbersSummed} !!!`);
