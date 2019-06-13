
function truthCheck(...args) {
  const anArray = args[0];
  const filteredArray =  anArray.filter(x => x['sex']);
  if (filteredArray.length === anArray.length) {
    return true;
  }
  return false;
}



export {
  truthCheck,
};
