
function objectKeys(object) {
  const keys = [];
   for(var key in object) { 
     keys.push(key) 
  };
   return keys;
}

export {
  objectKeys,
};
