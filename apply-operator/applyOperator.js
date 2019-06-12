
const operations = {
  ADD: '+',
  SUB: '-',
  MUL: '*',
  DIV: '/',
  MODULUS: '%',
};

const supportedOperations = [
  operations.ADD,
  operations.SUB,
  operations.MUL,
  operations.DIV,
  operations.MODULUS,
];


function applyOperator(...args) {
  const operation = args.shift();
  if (!supportedOperations.includes(operation)) {
    throw new Error('operation is not supported');
  }

  if (args.length === 0) {
    return 0;
  }

  switch (operation) {
    case operations.ADD:
      return args.reduce((a, b) => (a + b), 0);
    case operations.SUB:
      return args.reduce((a, b) => (a - b), 0);
    case operations.MUL:
      return args.reduce((a, b) => (a * b), 1);
    case operations.DIV:
      return args.reduce((a, b) => (a / b));
    case operations.MODULUS:
      return args.reduce((a, b) => (a % b));
    default:
      throw new Error('operation is not supported');
  }
}

export {
  applyOperator,
};
