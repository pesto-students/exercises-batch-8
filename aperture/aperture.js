
function aperture(apertureSize, numbers) {
  return numbers.reduce((acc, number, index, nums) => {
    if (index + apertureSize <= nums.length) {
      acc.push(nums.slice(index, index + apertureSize));
    }
    return acc;
  }, []);
}

export {
  aperture,
};
