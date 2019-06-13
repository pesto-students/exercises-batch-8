/* eslint-disable no-trailing-spaces */
const retainTruthy = value => value !== undefined
  && value !== null 
  && value !== false 
  && value !== 0 
  && value !== '' 
  // eslint-disable-next-line no-restricted-globals
  && !isNaN(value);

function bouncer(...values) {
  const truthyValues = values.filter(retainTruthy);
  return truthyValues;
}

export {
  bouncer,
};
