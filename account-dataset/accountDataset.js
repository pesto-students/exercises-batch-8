const dataset = require('./dataset.json');

const { bankBalances } = dataset;
function accountDataset(...args) {
  return args;
}

const hundredThousandairs = () => bankBalances.filter(({ amount }) => amount > 100000);

function ObjectWithRoundedDollar({ amount, state }) {
  return {
    amount,
    state,
    rounded: Math.round(amount),
  };
}

const datasetWithRoundedDollar = () => bankBalances
  .map(bankBalance => ObjectWithRoundedDollar(bankBalance));

const sumOfAmount = () => bankBalances
  .reduce((result, { amount }) => result + Number.parseFloat(amount, 10), 0);
const multipleOf10 = 10 ** 2;
const sumOfBankBalances = () => Math.round(sumOfAmount() * multipleOf10) / multipleOf10;

const interestStates = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];

const ROI = 0.189;
const interestValue = amount => Math.round(amount * ROI * multipleOf10) / multipleOf10;

const sumOfInterests = () => parseFloat(bankBalances
  .filter(({ state }) => interestStates.includes(state))
  .reduce((result, { amount }) => result + interestValue(parseFloat(amount)), 0)
  .toFixed(2));

const sumOfStateAmmount = bankBalances
  .reduce((result, { state, amount }) => {
    result[state] = (result[state] || 0) + parseFloat(amount);
    return result;
  }, {});

const higherStateSums = () => Object.keys(sumOfStateAmmount).filter(key => sumOfStateAmmount[key] > 1000000)
  .reduce((result, key) => result + sumOfStateAmmount[key], 0);

export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
