function thisReturns(parentRefrence) {
  if (parentRefrence.object.value <= 5) {
    parentRefrence.object.value = parentRefrence.object.value + 1;
    return parentRefrence.object;
  }
  return { value: undefined, done: true };
}

function simpleIterable() {
  return {
    object: {
      value: 0,
      done: false,
    },
    [Symbol.iterator]:() {
      return thisReturns(this);
    },
  };
}

export { simpleIterable };
