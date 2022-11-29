

try {  
  var data1 = fs.readFileSync('1.txt', 'utf8');
  var data2 = fs.readFileSync('2.txt', 'utf8');
console.log(
  [data1,data2].join(":")
);