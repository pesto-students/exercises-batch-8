const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.redirect('/form-with-get'));

app.get('/form-with-get', (req, res) => res.render('form-with-get'));

app.get('/form-with-post', (req, res) => res.render('form-with-post'));

app.get('/submit-form-with-get', (req, res) => {
  const { first, last } = req.query;
  const response = {
    firstName: first,
    lastName: last,
  };
  return res.send(JSON.stringify(response));
});

app.post('/submit-form-with-post', (req, res) => {
  const { first, last } = req.body;
  const response = {
    firstName: first,
    lastName: last,
  };
  return res.send(JSON.stringify(response));
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
