
function argsString(sentence, args) {
  return args.reduce((acc, arg) => acc.replace('{}', arg), sentence);
}

export {
  argsString,
};
