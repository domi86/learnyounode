var q = require('q');

function throwMyGod() { throw new Error("OH NOES");}

function iterate(arg) {
  console.log(arg);
  return arg + 1;
}

q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(null, console.log)
;