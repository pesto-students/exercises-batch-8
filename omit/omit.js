const getDesiredProperties = (obj, isDesired) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    if (isDesired(key)) {
      acc[key] = value;
    }
    return acc;
  }, {});
function omit(listOfPropsToOmit, obj) {
  const isDesired = prop => !listOfPropsToOmit.includes(prop);

  const prototypeProps = Object.getPrototypeOf(obj);
  return {
    ...getDesiredProperties(obj, isDesired),
    ...getDesiredProperties(prototypeProps, isDesired)
  };
}
export { omit };
