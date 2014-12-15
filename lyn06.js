var modooole = require('./lyn06mod.js');

var dir = process.argv[2];
var filter = process.argv[3];

function backie(err, data) {
  if(err){
    //wayne

  }  
  else {
    data.forEach(function(item){
      console.log(item);
    });
  }
}

modooole(dir,filter,backie);