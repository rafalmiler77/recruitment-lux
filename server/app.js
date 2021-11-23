const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const data = require('./data');

const port = 5001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/data', (req, res, next) => {
  res.json({
    "message": "success",
    data
  })
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))
