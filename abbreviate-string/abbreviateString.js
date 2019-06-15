
function abbreviateString(name) {
  if (typeof name !== 'string') {
    throw new Error(`Expected a string. Received ${typeof name}`);
  }

  const names = name.split(' ');
  const [firstName, lastName] = [names[0], names[names.length - 1]];
  return `${firstName} ${lastName[0].toUpperCase()}.`;
}

export {
  abbreviateString,
};
