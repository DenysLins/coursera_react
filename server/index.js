const express = require('express')
const data = require('./data.json')
const cors = require('cors')
const app = express()

app.use(express.static('public'))

app.use(cors())

app.get('/dishes', function (req, res) {
  res.json(data.dishes)
})

app.get('/comments', function (req, res) {
  res.json(data.comments)
})

app.get('/promotions', function (req, res) {
  res.json(data.promotions)
})

app.get('/leaders', function (req, res) {
  res.json(data.leaders)
})

app.get('/feedback', function (req, res) {
  res.json(data.feedback)
})

const port = process.env.PORT || "3001";

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
