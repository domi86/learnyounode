var q = require('q');
var d1 = q.defer();
var d2 = q.defer();

function all(p1, p2) {
  var def = q.defer();
  var counter = 0;
  var res = [];
  p1.then(function(txt) {
    counter++;
    res.push(txt);
    if(counter == 2)
      def.resolve(res);
  }, function() {
    def.reject()
  });
  p2.then(function(txt) {
    counter++;
    res.push(txt);
    if(counter==2)
      def.resolve(res);
  }, function() {
    def.reject()
  });
  return def.promise;
}
all(d1.promise,d2.promise).then(console.log);
setTimeout(resolveNOW, 200);
function resolveNOW(){
  d1.resolve("PROMISES");
  d2.resolve("FTW");
}