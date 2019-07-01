
import { bankBalances } from './dataset.json';

const haveBalanceGreaterThan = limit => bankBalances.filter(balance => balance.amount > limit);

function hundredThousandairs() {
  return haveBalanceGreaterThan(100000);
}

function datasetWithRoundedDollar() {
  const newDataset = [];

  for (const balance of bankBalances) {
    newDataset.push({
      ...balance,
      rounded: Math.round(balance.amount),
    });
  }

  return newDataset;
}

function sumOfBankBalances() {
  const DECIMAL = 10;

  const totalBalance = bankBalances.reduce((sumAccumulator, balance) => {
    const amount = parseFloat(balance.amount, DECIMAL);
    return sumAccumulator + amount;
  }, 0);

  return parseFloat(totalBalance.toFixed(2), DECIMAL);
}

function sumOfInterests() {
  const DECIMAL = 10;
  const RATE_OF_INTEREST = 0.189;
  const TAXABLE_STATES = {
    Wisconsin: 'WI',
    Illinois: 'IL',
    Wyoming: 'WY',
    Ohio: 'OH',
    Georgia: 'GA',
    Delaware: 'DE',
  };

  const round = (number, precision) => {
    const roundingFactor = 10 ** precision;
    return Math.round(number * roundingFactor) / roundingFactor;
  };

  const taxableStateSymbols = Object.values(TAXABLE_STATES);
  const totalInterest = bankBalances.reduce((sumAccumulator, balance) => {
    if (!taxableStateSymbols.includes(balance.state)) {
      return sumAccumulator;
    }

    const interest = round(balance.amount * RATE_OF_INTEREST, 2);
    const interestRounded = parseFloat(interest, DECIMAL);

    return sumAccumulator + interestRounded;
  }, 0);

  return round(totalInterest, 2);
}

function higherStateSums() {
  const hasKey = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

  const LIMIT = 1000000;
  const hashTable = {};

  for (const balance of bankBalances) {
    if (hasKey(hashTable, balance.state)) {
      const stateTotal = Number(hashTable[balance.state]) + Number(balance.amount);
      hashTable[balance.state] = stateTotal;
    } else {
      hashTable[balance.state] = Number(balance.amount);
    }
  }

  const higherStateAmounts = Object.values(hashTable).filter(amount => amount > LIMIT);
  const sumOfAmounts = higherStateAmounts.reduce((sum, amount) => sum + amount, 0);

  return sumOfAmounts;
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
