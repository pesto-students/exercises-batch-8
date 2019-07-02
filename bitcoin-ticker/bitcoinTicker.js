/* eslint-disable dot-notation */
const https = require('https');

function bitcoinTicker(obj) {
  let queryParams = '?';
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      queryParams += `${key}=${obj[key]}`;
    }
  }
  return new Promise((resolve, reject) => {
    https
      .get(`https://api.coinmarketcap.com/v2/ticker/${queryParams}`, (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          console.log(body);
          resolve(JSON.parse(body));
        });
      })
      .on('error', (e) => {
        reject(e.name);
      });
  });
}

export { bitcoinTicker };
