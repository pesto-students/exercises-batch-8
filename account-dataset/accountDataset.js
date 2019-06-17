import dataset from './dataset.json';

function accountDataset(...args) {
  return args;
}

function hasMoreThanHundredThousandUSD(account) {
  const HUNDRED_THOUSAND = 100000;
  return Number(account.amount) > HUNDRED_THOUSAND;
}

function hundredThousandairs() {
  return dataset.bankBalances.filter(hasMoreThanHundredThousandUSD);
}

function datasetWithRoundedDollar() {
  const roundedAmountsDataset = dataset.bankBalances
    .map(account => (
      {
        ...account,
        rounded: Math.round(account.amount),
      }
    ));
  return roundedAmountsDataset;
}

function sumOfBankBalances() {
  const cumulativeAmountObj = dataset.bankBalances.reduce((acc, curr) => ({
    amount: Number(acc.amount) + Number(curr.amount),
  }));
  return Number(cumulativeAmountObj.amount.toFixed(2));
}


function sumOfInterests() {
  const { bankBalances } = dataset;
  const states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  const accountsOfStates = bankBalances.filter(account => states.includes(account.state));
  const totalInterest = accountsOfStates
    .reduce((acc, curr) => {
      const interestAmount = parseFloat((curr.amount * 18.9) / 100);
      const amountWithInterest = parseFloat(interestAmount + curr.amount).toFixed(2);

      return acc + parseFloat(amountWithInterest);
    }, 0);
  return parseFloat(totalInterest.toFixed(2));
}

function higherStateSums() {
  const { bankBalances } = dataset;
  const minium = 1000000;
  const amountOfStates = {};
  bankBalances.forEach((account) => {
    if (amountOfStates[account.state]) {
      amountOfStates[account.state] += parseFloat(account.amount);
    } else {
      amountOfStates[account.state] = parseFloat(account.amount);
    }
  });
  const amountOfStatesArray = Object.values(amountOfStates);
  return amountOfStatesArray.reduce((acc, curr) => {
    if (curr > minium) {
      return acc + curr;
    }
    return acc;
  }, 0);
}

export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
