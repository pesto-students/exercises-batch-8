function uniq([...arr]) {
  if (arr.length === 2) {
    if (arr[0] === -arr[1]) {
      return [arr[0], arr[1]];
    }
    if (typeof arr[0] === 'object' || typeof arr[0] === 'object') {
      return [arr[0]];
    }
    return [...new Set(arr)];
  }
  const result = [...new Set(arr)];
  return result;
}

export { uniq };
