
const http = require('http');

function bitcoinTicker(limit) {
  const apiUrl = `https://api.coinmarketcap.com/v2/ticker?limit=${limit}`;

  // TODO: send http request
}

export {
  bitcoinTicker,
};
