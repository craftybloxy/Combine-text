//init file stream
const fs = require('fs');
const writeStream = fs.createWriteStream('result.txt');
const pathName = writeStream.path;


// init prompt
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

// log out the resut
console.log(result_array)

//write line by line the result
result_array.forEach(value => writeStream.write(`${value}\n`));

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {
   console.log(`wrote all the result_array data to file ${pathName}`);
});

// handle the errors on the write process
writeStream.on('error', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`)
});

// close the stream
writeStream.end();
