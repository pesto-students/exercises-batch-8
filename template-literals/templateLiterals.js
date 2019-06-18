function templateLiterals() {
  const teamName = 'football';
  const people = [{
    name: 'Rooney',
    role: 'CF',
  },
  {
    name: 'Ronaldo',
    role: 'LW',
  },
  {
    name: 'Messi',
    role: 'RW',
  },
  {
    name: 'Pogba',
    role: 'CM',
  }];
  return `There are 4 people on the ${teamName} team. Their names are ${people.map(player => player.name).join(', ')}.`;
}
export {
  templateLiterals,
};
