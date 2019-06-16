const result = [0];

function carried(name, key, result) {
  result[key] = name % 10;
  result.push(0);
  checkToCarryAndDoIt(0, key + 1, result, 1);
}

function checkToCarryAndDoIt(element, key, result, carry) {
  const number = Number(result[key]) + Number(element) + Number(carry);

  return number >= 10 ? carried(number, key, result) : (result[key] = number % 10);
}

function addBigIntegers(args) {
  const arrayString = args.split('\n');
  arrayString.map((element) => {
    const numberArray = element.split('');
    numberArray.map((innerEle) => {
      checkToCarryAndDoIt(innerEle, 0, result, 0);
    });
  });
  return result.reverse().join('');
}

export { addBigIntegers };
