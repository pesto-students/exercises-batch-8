
function truthCheck(objects, key) {
  return objects
    .reduce((acc, object) => (acc && Boolean(object[key])), true);
}

export {
  truthCheck,
};
