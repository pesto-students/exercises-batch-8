const dataset = require('./dataset.json');

function hundredThousandairs() {
  return dataset.bankBalances.filter(account => (account.amount > 100000));
}

function datasetWithRoundedDollar() {
  return dataset.bankBalances.map(account => ({ ...account, rounded: Math.round(account.amount) }));
}
function sumOfBankBalances() {
  const sumOfBankBalancesValue = dataset.bankBalances.reduce((acc, account) => {
    const amountRoundedToCents = Math.round(account.amount * 100) / 100;
    return acc + amountRoundedToCents;
  }, 0);
  const roundedSumOfBankBalances = sumOfBankBalancesValue.toFixed(2);
  return Number(roundedSumOfBankBalances);
}
function sumOfInterests() {
  // const selectedStates = [
  //   'Wisconsin',
  //   'Illinois',
  //   'Wyoming',
  //   'Ohio',
  //   'Georgia',
  //   'Delaware',
  // ];
  const sumOfBankBalancesValue = dataset.bankBalances.reduce((acc, account) => {
    const amountRoundedToCents = Math.round(account.amount * 100) / 100;
    return acc + amountRoundedToCents;
  }, 0);
  const roundedSumOfBankBalances = sumOfBankBalancesValue.toFixed(2);
  return Number(roundedSumOfBankBalances);
}
function higherStateSums() {
  const stateWiseAmounts = dataset.bankBalances.reduce((acc, account) => {
    if (acc[account.state]) {
      acc[account.state].amount += Number(account.amount);
    } else {
      acc[account.state] = {
        amount: Number(account.amount),
      };
    }
    return acc;
  }, {});
  return Number(Object.keys(stateWiseAmounts).reduce((acc, state) => {
    if (stateWiseAmounts[state].amount > 1000000) {
      // eslint-disable-next-line no-param-reassign
      acc += stateWiseAmounts[state].amount;
    }
    return acc;
  }, 0).toFixed(2));
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
