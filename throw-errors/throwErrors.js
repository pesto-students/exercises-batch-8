function throwErrors(...args) {
  
  try {
  a++;
  } catch (e) {
    if (e instanceof ReferenceError) {
      return e.name;
    }
  }
}

export { throwErrors };
