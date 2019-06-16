const isOdd = num => num % 2 !== 0;

const addArray = num => num.reduce((result, value) => result + value, 0);

function sumFibs(num) {
  const fibArray = [0, 1];
  function calculateFib() {
    const [secondLatNum, lastNum] = fibArray.slice(fibArray.length - 2);
    const nextNum = secondLatNum + lastNum;
    if (num >= nextNum) {
      fibArray.push(nextNum);
      calculateFib();
    }
  }

  calculateFib();
  return addArray(fibArray
    .filter(isOdd));
}

export {
  sumFibs,
};
