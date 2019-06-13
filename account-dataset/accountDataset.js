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
      rounded: Math.floor(amount),
      ...rest,
    };
  });
}

function sumOfBankBalances() {
  const sum = bankBalances.reduce((total, { amount }) => total + parseFloat(amount), 0);
  return Math.round(sum * 100) / 100;
}

// function sumOfInterests() {
//   const interestPercebtage = 18.9;
//   const states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];

//   const accountsWithSelectedStates = bankBalances
//     .filter(account => states.includes(account.state));

//   const totalInterest = accountsWithSelectedStates
//     .reduce((total, { amount }) => {

//     })
// }

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
};
