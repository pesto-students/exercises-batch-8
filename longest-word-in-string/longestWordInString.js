function reducer(acc, curr) {
  return {
    length: Math.max(acc.length, curr.length),
  };
}

function longestWordInString(sentence) {
  const words = sentence.split(' ');
  const longestWord = words.reduce(reducer).length;
  return longestWord;
}

export {
  longestWordInString,
};
