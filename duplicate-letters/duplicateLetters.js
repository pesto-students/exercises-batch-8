
function duplicateLetters(string) {
  const charCountStore = new Map();
  for (const char of string) {
    if (charCountStore.has(char)) {
      const charCount = charCountStore.get(char);
      charCountStore.set(char, charCount + 1);
    } else {
      charCountStore.set(char, 1);
    }
  }
  if (charCountStore.size === string.length) {
    return false;
  }
  return Math.max(...charCountStore.values());
}

export {
  duplicateLetters,
};
