const https = require('https');

function bitcoinTicker({ limit }) {
  const bitcoinTickerPromise = new Promise((resolve) => {
    https.get('https://api.coinmarketcap.com/v2/ticker/', (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        const parsedBody = JSON.parse(body);
        // eslint-disable-next-line max-len
        const topRankedBitCoinsKeys = Object.keys(parsedBody.data).filter(key => parsedBody.data[key].rank <= limit);
        const topRandkedBitCoins = topRankedBitCoinsKeys.reduce((acc, key) => {
          acc.data[key] = parsedBody.data[key];
          return acc;
        }, {
          data: {},
        });
        resolve(topRandkedBitCoins);
      });
    });
  });
  return bitcoinTickerPromise;
}
bitcoinTicker({ limit: 10 }).then(val => console.log(val));
// export {
//   bitcoinTicker,
// };
