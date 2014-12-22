var inputs = process.argv.slice(2);
var results = inputs.map(x => x[0]);
results = results.reduce((prev, curr) => {
  return prev.toString().concat(curr);
});
console.log('[' + inputs + '] becomes "' + results + '"');