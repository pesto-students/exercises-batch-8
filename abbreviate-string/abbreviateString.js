const firstWord = string => string.slice(0, string.indexOf(' '));

const lastWord = string => string.slice(string.lastIndexOf(' '), (string.lastIndexOf(' ') + 2));

const lastWordInitial = string => lastWord(string).toUpperCase();

function abbreviateString(string) {
  if (typeof string === 'string') {
    return firstWord(string) + lastWordInitial(string) + '.';
  } else {
    throw new Error('The function only supports Strings')
  }
}

export {
  abbreviateString,
};
