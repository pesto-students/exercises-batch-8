import fs from 'fs';

const { bankBalances } = JSON.parse(fs.readFileSync(`${__dirname}/dataset.json`, 'utf8'));

function hundredThousandairs() {
  return bankBalances.filter(account => account.amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(account => ({
    ...account,
    rounded: Math.round(account.amount),
  }));
}

function sumOfBankBalances() {
  return bankBalances.reduce(
    (sum, account) => Math.round(100 * (sum + Number(account.amount))) / 100,
    0,
  );
}

function calculateInterest(amount, interest) {
  return Math.round(amount * interest) / 100;
}

function sumOfInterests() {
  const states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  return bankBalances
    .filter(account => states.includes(account.state))
    .reduce(
      (sum, account) => Math.round(100 * (sum + calculateInterest(account.amount, 18.9))) / 100,
      0,
    );
}

function higherStateSums() {
  const stateSums = bankBalances.reduce((obj, account) => {
    const newObj = {
      ...obj,
    };
    if (account.state in obj) {
      newObj[account.state] += Number(account.amount);
    } else {
      newObj[account.state] = Number(account.amount);
    }
    return newObj;
  }, {});
  return Object.keys(stateSums)
    .filter(state => stateSums[state] > 1000000)
    .reduce((sum, state) => sum + stateSums[state], 0);
}


export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
