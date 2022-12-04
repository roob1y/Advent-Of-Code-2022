const fs = require("fs");

const lines = fs.readFileSync("input.txt", "utf-8").split("\n");

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

total = 0;

for (let i = 0; i < lines.length; i += 3) {
  let groups = []
  if (i % 3 === 0) {
    groups.push([...lines[i]], [...lines[i + 1]], [...lines[i + 2]]);
  }
  let set = new Set(groups[0])
  let intersection = groups[1].filter((item => set.has(item)))
  
  set = new Set(intersection)
  // console.log('set: ', set);
  intersection = groups[2].filter((item) => set.has(item)) 

  const removeRepeats = [...new Set(intersection[0])]

  total += findPriorityValWithLetter(removeRepeats)
}

console.log('total: ', total);