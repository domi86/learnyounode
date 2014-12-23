var q = require('q');
var defer = q.defer();
defer.promise.then(null, printErr);
setTimeout(defer.reject, 300, new Error("REJECTED!"));
function printErr(err) {console.log(err.message);}