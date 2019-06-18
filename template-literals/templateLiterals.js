function templateLiterals() {
  const footballTeam = ['Rooney', 'Ronaldo', 'Messi', 'Pogba'];
  return `There are 4 people on the football team. Their names are ${footballTeam.join(', ')}.`;
}

export { templateLiterals };
