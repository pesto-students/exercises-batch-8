function alienAlphabet([...args]) {
  const presentAlbhabet = args
    .join('')
    .split('')
    .sort();
  let lastcharacter='a';
  const resultArrray = presentAlbhabet.filter((element) => {
    if (element !== lastcharacter) {
            lastcharacter=i;
      return true;
    }
  });
  return resultArrray;
}

export { alienAlphabet };
