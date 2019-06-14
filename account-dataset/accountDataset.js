const dataset = require('./dataset.json');

const { bankBalances } = dataset;

function hundredThousandairs() {
  return bankBalances.filter(account => account.amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map((account) => {
    const { amount, ...rest } = account;
    return {
      amount,
      rounded: Math.round(amount),
      ...rest,
    };
  });
}

function sumOfBankBalances() {
  const sum = bankBalances.reduce((total, { amount }) => total + parseFloat(amount), 0);
  return Math.round(sum * 100) / 100;
}

function sumOfInterests() {
  const interestPercentage = 18.9;
  const states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];

  const accountsWithSelectedStates = bankBalances
    .filter(account => states.includes(account.state));

  const totalInterest = accountsWithSelectedStates
    .reduce((total, { amount }) => {
      const interestAmount = parseFloat((amount * interestPercentage) / 100);
      const amountWithInterest = parseFloat(interestAmount + amount).toFixed(2);

      return total + parseFloat(amountWithInterest);
    }, 0);
  return parseFloat(totalInterest.toFixed(2));
}

function higherStateSums() {
  const thresholdAmount = 1000000;
  const states = {};
  bankBalances.forEach((account) => {
    const { state } = account;
    const amount = parseFloat(account.amount);
    if (!states[state]) {
      states[state] = amount;
    } else {
      states[state] += amount;
    }
  });

  const statesCrossingThresholdAmount = Object.values(states)
    .filter(amount => amount > thresholdAmount);

  return statesCrossingThresholdAmount
    .reduce((sum, amount) => sum + amount, 0);
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
