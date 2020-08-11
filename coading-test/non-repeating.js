/**
 * @type {string} source string
*/
const str = "";

/**
 * return index of first non-repeating char
 * @param {string} s
 * @return {number} 
*/
function firstUniqChar(s) {
  // 一文字しかない場合、0を返す。
  if (s.length == 1) {
    return 0;
  }

  const map = new Map();

  // 文字列を左から右へスキャンする。並行してMapに値を追加していく。
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  
  // もう一度文字列を左から右へスキャンし、最初にvalueが1のkeyを返す。
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

console.group(firstUniqChar(str));