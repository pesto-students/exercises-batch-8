function xprod(firstArray, secondArray) {
  return firstArray.reduce((acc, firstArrayElement) => {
    const combinedArrays = secondArray.map(secondArrayElement => [
      firstArrayElement,
      secondArrayElement,
    ]);
    return [...acc, ...combinedArrays];
  }, []);
}

export { xprod };
