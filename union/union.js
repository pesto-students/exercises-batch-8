function union([...arr1], [...arr2]) {
  const result = [];
  // eslint-disable-next-line array-callback-return
  arr1.map((element) => {
    if (!arr2.includes(element)) {
      result.push(element);
    }
  });

  return [...result, ...arr2];
}

export { union };
