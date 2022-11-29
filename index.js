// init
const result = []
const prompt = require("prompt-sync")();
let array1 = prompt("array1$ ").split(" ");
let array2 = prompt("array2$ ").split(" ");
// tried to do array1:array2
let i = 0
while (i < array1.length) {
  result.push(array1[i] + ":" + array2[i])
  i += 1
}

console.log(result)