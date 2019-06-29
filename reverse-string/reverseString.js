/* eslint-disable no-param-reassign */

function reverseString(word) {
  if (typeof word !== 'string') {
    throw new Error('The supplied word must be a string');
  }
  if (word === '') {
    return word;
  }
   return reverseString(word.substr(1)) + word[0];
  
}

export {
  reverseString,
};
