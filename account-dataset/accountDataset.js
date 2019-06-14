import dataset from './dataset.json';

const roundToTwo = number => (Math.round(number * 100) / 100);
function hundredThousandairs() {
  return dataset.bankBalances.filter(account => account.amount > 100000);
}
function datasetWithRoundedDollar() {
  return dataset.bankBalances.map((account) => {
    const accountCopy = account;
    accountCopy.rounded = Math.round(accountCopy.amount);
    return accountCopy;
  });
}
function sumOfBankBalances() {
  return roundToTwo(Number(
    dataset.bankBalances
      .map(account => account.amount)
      .reduce((a, b) => Number(a) + Number(b)),
  ));
}
function sumOfInterests(states) {
  return states.map(state => roundToTwo(Number(
    dataset.bankBalances
      .filter(account => account.state === state)
      .reduce((a, b) => Number(a) + Number(b.amount) * 0.189, 0),
  ))).reduce((a, b) => a + b);
}
function higherStateSums() {
  const totalAmountByStates = {};
  dataset.bankBalances.map((account) => {
    if (!totalAmountByStates[account.state]) {
      totalAmountByStates[account.state] = 0;
    }
    totalAmountByStates[account.state] += Number(account.amount);
    return null;
  });
  return roundToTwo(Object.keys(totalAmountByStates)
    .filter(state => totalAmountByStates[state] > 1000000)
    .reduce((a, b) => a + totalAmountByStates[b], 0));
}
export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
