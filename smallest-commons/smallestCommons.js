// const isLCM = (numberToCheck, array) => {
//   let flag = true;
//   array.map((value) => {
//     if (numberToCheck % value !== 0) {
//       flag = false;
//     }
//     return null;
//   });
//   return flag;
// };
function smallestCommons(limits) {
  const lb = Math.min(...limits);
  const ub = Math.max(...limits);
  let i = lb;
  const rangeArray = [];
  while (i <= ub) {
    rangeArray.push(i);
    i += 1;
  }
  // let result = ub + 1;
  // // while (!isLCM(result, rangeArray)) {
  // //   result += 1;
  // // }
  // return result;
  return 0;
}

export {
  smallestCommons,
};
