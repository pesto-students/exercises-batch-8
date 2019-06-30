
function truthCheck(array, predicate) {
  const validatedTruth = array.every((element) => {
    const keyExists = Object.prototype.hasOwnProperty.call(element, predicate);
    return keyExists && Boolean(element[predicate]);
  });

  return validatedTruth;
}

export {
  truthCheck,
};
