const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/', (req, res) => (
  res.redirect('/form-with-get')
));

app.get('/form-with-get', (req, res) => (
  res.render('form-with-get')
));

app.get('/form-with-post', (req, res) => (
  res.render('form-with-post')
));

app.get('/submit-form-with-get', (req, res) => (
  res.send(req.query)
));

app.post('/submit-form-with-post', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
