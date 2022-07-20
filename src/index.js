module.exports = function check(str, bracketsConfig) {
  const openTags = bracketsConfig.filter(c => c[0] !== c[1]).map(c => c[0]);
  const closeTags = bracketsConfig.filter(c => c[0] !== c[1]).map(c => c[1]);
  const sameTags = bracketsConfig.filter(c => c[0] === c[1]).map(c => c[0]);
  const helpArr = [];
  const getPair = x => bracketsConfig.find(a => a[1] === x)[0];
  for (const x of str) {
    if (sameTags.includes(x)){
      if (helpArr.at(-1) === x){
        helpArr.pop();
      }
      else {
        helpArr.push(x);
      }
    }
    else if (openTags.includes(x)) {
      helpArr.push(x);
    }
    else if (closeTags.includes(x)) {
      let pair = getPair(x);
      if (pair === helpArr.at(-1)) {
        helpArr.pop();
      }
      else {
        return false;
      }
    }
  }
  return helpArr.length === 0;
}
