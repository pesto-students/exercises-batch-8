
//WIP
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const Cryptr = require('cryptr');

const cryptr = new Cryptr('Shhhh!!');

const someDB = [];

app.use(bodyParser.json());

app.use((req, res, next) => {
  if (!req.headers.authorization && req.originalUrl !== '/signup') {
    res.status(403).send('Forbidden');
  } else {
  }
  next();
});

app.get('/', (req, res) => {
  res.send(['list', 'of', 'movies', '!!']);
});
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const encryptedPassword = cryptr.encrypt(password);
  someDB.push({ username, encryptedPassword });
  res.send(encryptedPassword);
});
app.listen(3000, () => {
  console.log('Listening to 3000');
});
