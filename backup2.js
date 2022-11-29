const prompt = require("prompt-sync")();
let array = prompt("array1$ ").split(" ");
let array2 = prompt("array2$ ").split(" ");


let i = 0
while (i < array.length) {
  console.log([array1.at(i),array2.at(i)].join(":"))
  i += 1
}



const prompt = require("prompt-sync")();
let array = prompt("array1$ ")
console.log(array.join(' ').split(' '));
