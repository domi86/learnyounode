exports.parse = function(str) {
  var lineArr = str.split('\n');
  var res = [];
  lineArr.forEach(function (item) {
    res.push(JSON.parse(item));
  });
  return res;
};

exports.stringify = function(rows) {
  resArr = [];
  rows.forEach(function(item) {
    resArr.push(JSON.stringify(item));
  });
  return resArr.join('\n');
};
