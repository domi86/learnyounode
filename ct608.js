console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(strings, user, comment) {
  if(strings) {
    var safeUser = safify(user);
    var safeComment = safify(comment);
    return strings[0] + safeUser + strings[1] + safeComment + strings[2];
  }
  else
    return;
}

function safify(text) {
  var replacements = new Map([['&', '&amp;'], ["'", "&#39;"], ['"', '&quot;'], ['<', '&lt;'], ['>', '&gt;']]);
  var ret = text;
  replacements.forEach((val, key) => {
    ret = ret.split(key).join(val);
  });
  return ret;
}