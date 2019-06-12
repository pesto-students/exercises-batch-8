
function isTriangle(...args) {
  const checkOne = args[0] + args[1] > args[2];
  const checkTwo = args[1] + args[2] > args[0];
  const checkThree = args[2] + args[0] > args[1];

  if (checkOne && checkTwo && checkThree) {
    return true;
  }
  return false;
}

export {
  isTriangle,
};
