function argsString(string, args) {
  return args.reduce((acc, arg) => acc.replace('{}', arg), string);
}

export { argsString };
