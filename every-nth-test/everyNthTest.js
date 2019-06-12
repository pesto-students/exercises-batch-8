
function everyNth(string, n) {
  return string.split('').filter((a, i) => i % n === 0).join('');
}

export {
  everyNth,
};
