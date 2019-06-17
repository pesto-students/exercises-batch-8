
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
  return `There are ${people.length} people on the ${teamName} team. Their names are ${people.map(player => player.name).join(', ')}.`;
}

export {
  templateLiterals,
};
