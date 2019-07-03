const https = require('https');

const requestOptions = {
  hostname: 'api.coinmarketcap.com',
  path: '/v2/ticker/',
  method: 'GET',
};

function bitcoinTicker({ limit }) {
  return new Promise((resolve, reject) => {
    https.get(requestOptions, (res) => {
      res.setEncoding('UTF8');
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        const json = JSON.parse(data);
        const coins = json.data;
        const top10Coins = [];
        Object.keys(coins).forEach((key) => {
          if (coins[key].rank <= limit) {
            top10Coins.push(coins[key].name);
          }
        });
        resolve(json);
      });
    });
  });
}

export { bitcoinTicker };
