import { promisify } from 'util';

const https = require('https');

const url = 'https://api.coinmarketcap.com/v2/ticker/';

async function bitcoinTicker({ limit }) {
  const get = promisify(https.get);
  await get(`${url}?limit=${limit}`, 'utf-8', (resp) => {
    console.log(Object.keys(resp));
    resp.on('data', (chunk) => {
      console.log(chunk)
    });
  });
}

export {
  bitcoinTicker,
};
