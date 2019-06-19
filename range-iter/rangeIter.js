
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
  return {
    [Symbol.iterator]() {
      const [lb, ub] = args;
      let num = lb;
      const iterator = {
        next() {
          if (num <= ub) {
            const valueObj = { value: num, done: false };
            num += 1;
            return valueObj;
          }
          return { done: true };
        },
      };
      return iterator;
    },
  };
}


export {
  rangeIter,
};
