const createErrorMessage = (message, isTypeError = false) => {
  if (isTypeError) {
    const error = new TypeError(message);
    throw error;
  }
  throw new Error(message);
};

function lastIndexOf(elementWhoseLastIndexIsRequired, array) {
  if (!Array.isArray(array)) {
    return createErrorMessage(`Expected array, got ${typeof numbers}`, true);
  }
  return array.lastIndexOf(elementWhoseLastIndexIsRequired);
}

// console.log(lastIndexOf(20, [20, "a", "b", null, 20, 19]));
export { lastIndexOf };
