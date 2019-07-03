
const https = require('https');
const queryString = require('query-string');

const url = 'https://api.coinmarketcap.com/v2/ticker/';

function bitcoinTicker(queryObject) {
  return new Promise((resolve) => {
    const queryParams = queryString.stringify(queryObject);
    https.get(`${url}?${queryParams}`, 'utf-8', (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        resolve(JSON.parse(data));
      });
    });
  });
}

export {
  bitcoinTicker,
};
