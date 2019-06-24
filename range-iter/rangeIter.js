// function rangeIter(...args) {
//   if (args.length !== 2 || !args.every(Number)) {
//     throw new TypeError(`${args[1]} is not a number`);
//   }

//   function* genRange(lb, ub) {
//     // const [lb, ub] = args;

//     if (ub < lb) {
//       return [];
//     }
//     for (let i = lb; i <= ub; i += 1) {
//       yield i;
//     }
//     return undefined;
//   }
//   return genRange(...args);
// }

function rangeIter(...args) {
  if (args.length !== 2 || !args.every(Number)) {
    throw new TypeError(`${args[1]} is not a number`);
  }
  const [lb, ub] = args;
  let num = lb;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (num <= ub) {
        const valueObj = { value: num, done: false };
        num += 1;
        return valueObj;
      }
      num = lb;
      return { done: true };
    },
  };
}

export { rangeIter };
