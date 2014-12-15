fs = require('fs');

dir = process.argv[2];
filter = '.' + process.argv[3];

fs.readdir(dir, backovic);

function  backovic(err, list) {
  filteredList = [];
  list.forEach(function(item){
    if (item.indexOf(filter) > -1){ filteredList.push(item);}
  });
  filteredList.forEach(function(item){
    console.log(item);
  });
}