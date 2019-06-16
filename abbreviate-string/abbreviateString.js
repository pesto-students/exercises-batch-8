function abbreviateString(...args) {
  const splitStringArray = args[0].split(' ');
  const { length } = splitStringArray;
  splitStringArray.splice(1, length - 2);
  const againSplit = splitStringArray[1].split('');
  const name = [splitStringArray[0], againSplit[0].toUpperCase()].join(' ');
  return [name, '.'].join('');
}

export { abbreviateString };
