var q = require('q');
var defer = q.defer();

function attachTitle(arg){ return "DR. " + arg}
defer.promise.then(function (txt){ return attachTitle(txt)}).then(console.log);
defer.resolve("MANHATTAN");