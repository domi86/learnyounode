var q = require('q');
var defer = q.defer();
defer.promise.then(function(text){console.log(text);});
setTimeout(defer.resolve('RESOLVED!'), 300);