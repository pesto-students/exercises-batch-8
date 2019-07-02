const https = require('https');

function bitcoinTicker() {
  const bitcoinTickerPromise = new Promise((resolve) => {
    https.get('https://api.coinmarketcap.com/v2/ticker/', (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        resolve(JSON.parse(body));
      });
    });
  });
  return bitcoinTickerPromise;
}
export {
  bitcoinTicker,
};
