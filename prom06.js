var q = require('q');

function parsePromised(){
  var defer = q.defer();
  var res = "";
  try{
    res = JSON.parse(process.argv[2]);
  } catch (e) {
    defer.reject(e)
  }
  defer.resolve(res);
  return defer.promise;
}

parsePromised().then(null, console.log);