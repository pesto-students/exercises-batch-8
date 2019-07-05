const performTitleCase = sentence => {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}

function titleize(sentence) {
  if (!sentence.split) return sentence;
  let result = [];
  sentence.split(" ").forEach(word => result.push(performTitleCase(word)));
  return sentence.join('');
}

export {
  titleize,
};