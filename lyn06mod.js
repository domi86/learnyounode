fs = require('fs');

module.exports = function (dir, filter, callback){
  var filteredList = [];

  function  backovic(err, list) {
    if(err){
      return callback(err);
    }
    list.forEach(function(item){
      if (item.indexOf('.' + filter) > -1){ filteredList.push(item);}
    });
    callback(err, filteredList);
  }

  fs.readdir(dir, backovic);
}