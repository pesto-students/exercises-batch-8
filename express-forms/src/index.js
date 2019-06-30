const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
const publicPath = path.join(__dirname, './views');
app.set('view engine', 'ejs');
app.use(express.static(publicPath));


app.get('/', (req, res) => res.redirect('/form-with-get'));

app.get('/form-with-get', (req, res) => res.render('form-with-get'));

app.get('/form-with-post', (req, res) => {
  res.render('form-with-post');
});

app.get('/submit-form-with-get', (req, res) => {
  const { first, last } = req.query;

  res.send({ first, last });
});

app.post('/submit-form-with-post', (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
