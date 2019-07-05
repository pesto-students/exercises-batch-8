
function titleize(sentence) {
  if (!sentence) {
    return sentence;
  }

  const characters = sentence.split('');
  const titalized = characters.reduce((accumulator, character) => {
    if (accumulator.lastChar === ''
        || accumulator.lastChar === ' '
        || accumulator.lastChar === '-'
    ) {
      accumulator.title += character.toUpperCase();
    } else {
      accumulator.title += character.toLowerCase();
    }
    accumulator.lastChar = character;

    return accumulator;
  }, { lastChar: '', title: '' });

  return titalized.title;
}

export {
  titleize,
};
