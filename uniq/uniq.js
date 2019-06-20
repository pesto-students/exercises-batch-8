function uniq([...arr1]) {
  const result = [...new Set(arr1)];
  return result;
}

export { uniq };
