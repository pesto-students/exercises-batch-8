
function pairwise([...nums], sum) {
  const matchingIndices = nums.reduce((acc, num, index, numbers) => {
    for (let i = 0; i < numbers.length; i += 1) {
      if (num + numbers[i] === sum) {
        const isIndexAlreadyPresent = acc.includes(index) || acc.includes(i);
        if (!isIndexAlreadyPresent) {
          if (index !== i) {
            acc.push(index);
            acc.push(i);
          }
        }
      }
    }
    return acc;
  }, []);
  return matchingIndices.reduce((acc, val) => acc + val, 0);
}

export {
  pairwise,
};
