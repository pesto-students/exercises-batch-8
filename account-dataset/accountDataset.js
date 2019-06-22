const accounts = require('./dataset.json').bankBalances;

const INTEREST_RATE = 18.9;

const STATES = ['WI', 'WY', 'OH', 'GA', 'DE', 'IL'];

function round(number, precision) {
  const roundingFactor = 10 ** precision;
  return Math.round(number * roundingFactor) / roundingFactor;
}

function filterAccounts(predicate) {
  return accounts.filter(account => predicate(account.amount));
}

function hundredThousandairs() {
  return filterAccounts(n => n > 100000);
}

function datasetWithRoundedDollar() {
  return accounts.map(account => ({ ...account, rounded: round(account.amount, 0) }));
}

function sumBalances(accountList) {
  const sum = accountList.reduce(
    (sumAccumulator, account) => sumAccumulator + Number(account.amount),
    0,
  );
  return round(sum, 2);
}

function sumOfBankBalances() {
  return sumBalances(accounts);
}

function sumOfInterests() {
  const interestSum = accounts.reduce((interestSumAccumulator, account) => {
    if (STATES.includes(account.state)) {
      const interest = round((account.amount * INTEREST_RATE) / 100, 2);
      return interestSumAccumulator + interest;
    }
    return interestSumAccumulator;
  }, 0);
  return round(interestSum, 2);
}

function higherStateSums() {
  const amountSumHashTable = accounts.reduce((accumulatedHashTable, account) => {
    const accumulatedHashTableCopy = { ...accumulatedHashTable };
    const { state } = account;
    const { amount } = account;
    if (accumulatedHashTableCopy[state] === undefined) {
      accumulatedHashTableCopy[state] = Number(amount);
    } else {
      accumulatedHashTableCopy[state] += Number(amount);
    }
    return accumulatedHashTableCopy;
  }, {});

  const aggregatedSum = Object.keys(amountSumHashTable).reduce((acc, key) => {
    if (amountSumHashTable[key] > 1000000) {
      return acc + amountSumHashTable[key];
    }
    return acc;
  }, 0);
  return round(aggregatedSum, 2);
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
