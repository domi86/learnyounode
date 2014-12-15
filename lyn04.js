fs = require('fs');
path = process.argv[2];


fs.readFile(path, backovic);

function backovic(err, data) {
  str = data.toString();
  arr = str.split('\n');
  console.log(arr.length - 1);
}