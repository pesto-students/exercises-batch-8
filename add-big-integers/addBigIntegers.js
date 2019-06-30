const compareString = (string1, string2) => {
  if (string1.length > string2.length) {
    return {
      smaller: string2,
      bigger: string1,
    };
  }
  return {
    smaller: string1,
    bigger: string2,
  };
};

function addBigInt(string1, string2) {
  const { smaller: smallerInt, bigger: biggerInt } = compareString(string1, string2);

  const smallerIntChars = smallerInt.split('');
  const biggerIntChars = biggerInt.split('');

  const lengthOfSmaller = smallerIntChars.length;
  const lengthOfBigger = biggerIntChars.length;
  const diffInLength = lengthOfBigger - lengthOfSmaller;

  const resultChars = [];

  let carry = 0; // Initial take carry as zero

  // Traverse from end of both strings
  for (let i = lengthOfSmaller - 1; i >= 0; i -= 1) {
    // So school Math now
    const sum = Number(smallerIntChars[i]) + Number(biggerIntChars[i + diffInLength]) + carry;
    resultChars.push(`${sum % 10}`);
    carry = Number.parseInt(sum / 10, 10);
  }

  // add remaining digits in biggerInt
  for (let i = diffInLength - 1; i >= 0; i -= 1) {
    const sum = Number(biggerIntChars[i]) + carry;
    resultChars.push(`${sum % 10}`);
    carry = Number.parseInt(sum / 10, 10);
  }

  // add remaining carry
  if (carry > 0) {
    resultChars.push(`${carry}`);
  }

  return resultChars.reverse().join('');
}

function addBigIntegers(expression) {
  const [countString, ...bigInts] = expression.split('\n');
  const count = Number(countString);

  let sum = bigInts[0];

  for (let i = 1; i < count; i += 1) {
    sum = addBigInt(sum, bigInts[i]);
  }

  return sum;
}

export {
  addBigIntegers,
};
