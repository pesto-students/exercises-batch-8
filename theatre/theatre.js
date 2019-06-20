
function theatre(bills) {
  return bills.reduce((acc, bill) => {
    if (bill === 50) {
      if ((acc.twenties * 20 + acc.tens * 10) >= 40) {
        let balance = bill - 10;
        while (acc.twenties > 0 && balance >= 20) {
          acc.twenties -= 1;
          balance -= 20;
        }
        while (acc.tens > 0 && balance >= 10) {
          acc.tens -= 1;
          balance -= 10;
        }
        if (balance === 0) {
          acc.fifties += 1;
        }
        return acc;
      }
      acc.status = acc.status && false;
      return acc;
    }
    if (bill === 20) {
      if ((acc.tens * 10) >= 10) {
        let balance = bill - 10;
        while (acc.tens > 0 && balance >= 10) {
          acc.tens -= 1;
          balance -= 10;
        }
        if (balance === 0) {
          acc.twenties += 1;
        }
        return acc;
      }
      acc.status = acc.status && false;
      return acc;
    }
    if (bill === 10) {
      acc.tens += 1;
      return acc;
    }
    return acc;
  }, {
    tens: 0,
    twenties: 0,
    fifties: 0,
    status: true,
  }).status;
}

export {
  theatre,
};
