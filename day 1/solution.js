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
