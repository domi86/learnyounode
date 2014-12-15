var fs = require('fs');
stuff = fs.readFileSync(process.argv[2]);
str = stuff.toString();
arr = str.split('\n');
console.log(arr.length - 1);