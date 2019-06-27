
function omit(keys, obj) {
  const prototypeObj = Object.getPrototypeOf(obj);
  const completeObj = { ...prototypeObj, ...obj };

  // eslint-disable-next-line max-len
  const finalKeys = keys.reduce((acc, key) => acc.filter(completeObjKey => key !== completeObjKey), Object.keys(completeObj));
  return finalKeys.reduce((acc, finalKey) => ({ ...acc, [finalKey]: completeObj[finalKey] }), {});
}

export {
  omit,
};
