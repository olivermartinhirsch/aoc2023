const fs = require("fs");

const parse = (source) => source.split("\n").filter(Boolean);

const games = parse(fs.readFileSync("input.txt", "utf-8"));

const partOne = (input, red, green, blue) => {
    let possible = 0;
    input.forEach(game => {
      let cubes = {red: 0, green: 0, blue: 0};
      game.split(';').forEach(set => {
        let [r, g, b] = set.split(' ').map(Number);
        cubes.red += r || 0;
        cubes.green += g || 0;
        cubes.blue += b || 0;
      });
      if (cubes.red <= red && cubes.green <= green && cubes.blue <= blue) {
        possible++;
      }
    });
    return possible;
  }

let red = 12;
let green = 13;
let blue = 14;

console.log(partOne(games, red, green, blue));