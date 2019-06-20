
function union(listOne, listTwo) {
  const uniqueNUmbers = new Set([...listOne, ...listTwo]);
  return Array.from(uniqueNUmbers).sort((a, b) => b > a);
}

export {
  union,
};
