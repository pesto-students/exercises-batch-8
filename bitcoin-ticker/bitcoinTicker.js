const https = require('https');

function bitcoinTicker({ limit }) {
  // let data;
  https.get('https://api.coinmarketcap.com/v2/ticker/', (res) => {
    console.log('statusCode', res.statusCode);
    console.log('headers', res.headers);

    let rawData = '';

    res.on('data', (chunk) => {
      rawData += chunk;
      process.stdout.write(chunk);
    });

    res.on('end', () => {
      const coins = JSON.parse(rawData);
    });
  });
}

export {
  bitcoinTicker,
};
