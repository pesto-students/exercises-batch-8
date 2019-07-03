const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.redirect('/form-with-get'));

app.get('/form-with-get', (req, res) => res.render('form-with-get'));

app.get('/form-with-post', (req, res) => res.render('form-with-post'));

app.get('/submit-form-with-get', (req, res) => {
  const firstname = req.query.first;
  const lastname = req.query.last;
  if (firstname === undefined) {
    res.status(400);
    res.send('first is required');
  } else if (lastname === undefined) {
    res.status(400);
    res.send('last is required');
  }
  res.send({ firstName: firstname, lastName: lastname });
});

app.post('/submit-form-with-post', (req, res) => {
  const firstname = req.body.first;
  const lastname = req.body.last;
  if (firstname === undefined) {
    res.status(400);
    res.send('first is required');
  } else if (lastname === undefined) {
    res.status(400);
    res.send('last is required');
  }
  res.send({ firstName: firstname, lastName: lastname });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
