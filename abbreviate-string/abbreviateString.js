
function abbreviateString(name) {
  if (typeof name !== 'string') {
    throw new Error('Invalid parameters.');
  }

  const names = name.split(' ');
  const [firstName, lastName] = [names[0], names[names.length - 1]];
  return `${firstName} ${lastName[0].toUpperCase()}.`;
}

export {
  abbreviateString,
};
