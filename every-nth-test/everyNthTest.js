const everyNth = (string, n) => string.split('').filter((a, i) => i % n === 0).join('');

export {
  everyNth,
};
