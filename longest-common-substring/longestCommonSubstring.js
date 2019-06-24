
function longestCommonSubstring(string1, string2) {
  let commonSubstring = '';
  for (let i = 0; i <= string1.length; i += 1) {
    for (let j = i + 1; j <= string1.length; j += 1) {
      const subString = string1.slice(i, j);
      if (string2.includes(subString)) {
        if (commonSubstring.length < subString.length) {
          commonSubstring = subString;
        }
      }
    }
  }
  return commonSubstring;
}

export {
  longestCommonSubstring,
};
