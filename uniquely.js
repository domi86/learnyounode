module.exports = function (strings) {
  var uniq = require('uniq');
  var bla = strings.split(',');
  return uniq(bla);
};