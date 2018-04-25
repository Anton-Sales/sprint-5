Looping a Triangle
for (let hashTag = "#"; hashTag.length <= 7; hashTag += "#")
    console.log(hashTag);

Fizz Buzz
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}

Chess Board
let grid = "8";
let board = "";
for (let x = 0; x < grid; x++) {
    for (let y = 0; y < grid; y++) {
        if ((x + y) % 2 == 0) {
            board += " "
        }
        else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);