const footballTeam = [
  'Rooney',
  'Ronaldo',
  'Messi',
  'Pogba',
];

const getPlayers = () => footballTeam.join(', ');

function templateLiterals() {
  return `There are ${footballTeam.length} people on the football team.`
    + ` Their names are ${getPlayers()}.`;
}

export {
  templateLiterals,
};
