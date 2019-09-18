
function everyNth(string, n) {
  // below solution looks good but not better runtime;
  // return string.split('').filter((a, i) => i % n === 0).join('');

  // Below will run only length/n times
  const chars = string.split('');
  let result = '';
  for (let i = 0; i < chars.length; i += n) {
    result += chars[i];
  }
  return result;
}

export {
  everyNth,
};
