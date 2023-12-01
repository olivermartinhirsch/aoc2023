const fs = require("fs");

const parse = (source) => source.split("\n").filter(Boolean);

const calibrationDocument = parse(fs.readFileSync("input.txt", "utf-8"));

const partOne = (calibrationDocument) => {
    const digitRegex = /\d/g
    return calibrationDocument
      .map((e) => e.match(digitRegex))
      .map((e) => Number(e[0] + e[e.length - 1]))
      .reduce((sum, value) => sum + value, 0)
  };
  
  console.log(partOne(calibrationDocument));

const partTwo = calibrationDocument => {

    let total = 0;

    const numberMappings = { 
        one: "one1one", 
        two: "two2two", 
        three: "three3three", 
        four: "four4four", 
        five: "five5five", 
        six: "six6six", 
        seven: "seven7seven", 
        eight: "eight8eight", 
        nine: "nine9nine"
    }

    for (let line of calibrationDocument) { 
        for (let num of Object.keys(numberMappings)) { 
            line = line.replaceAll([num], numberMappings[num]); 
        }

        const numbers = line.split('').filter(el => !isNaN(parseInt(el)))
        total += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`); 
        }

    return total
    }

console.log(partTwo(calibrationDocument));
