// init
const prompt = require("prompt-sync")();
// promt for both arrays and separate word with sapces
let array1 = prompt("array1$ ").split(" ");
let array2 = prompt("array2$ ").split(" ");
const result_array = []

let i = 0
// only uses as much words as there is in array1
while (i < array1.length) {
  // Combine array1:array2 into result_array line by line
  result_array.push(array1[i] + ":" + array2[i])
  i += 1
}

console.log(result_array)