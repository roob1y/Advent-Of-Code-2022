const fs = require("fs");

const textFile = fs.readFileSync("input.txt", "utf-8").split("\n");

let rucksacksArr = [];
textFile.map((compartments, index) => {
  rucksacksArr[index] = {
    first: [...compartments.slice(0, compartments.length / 2)],
    second: [...compartments.slice(compartments.length / 2)],
  };
});

const matchedLettersArr = [];

rucksacksArr.map((rucksack) => {
  const intersection = rucksack.second.filter((item) =>
    rucksack.first.includes(item)
  );
  const removeMultiple = [...new Set(intersection)];
  matchedLettersArr.push(...removeMultiple);
});

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseAlphabet = alphabet.toUpperCase();
const alphabetConc = alphabet + upperCaseAlphabet;

const priorityObj = {};
for (let index in alphabetConc) {
  priorityObj[alphabetConc[index]] = +index + 1;
}

function findPriorityValWithLetter(letter) {
  return priorityObj[letter];
}

let total = 0;

for (let index in matchedLettersArr) {
  total +=
    findPriorityValWithLetter(matchedLettersArr[index]) * matchedLettersArr[index].length;
}

console.log(total);
