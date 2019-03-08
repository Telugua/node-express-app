const express = require('express')
const app = express()

const hostname = '0.0.0.0'   // set constants
const port = 3002

app.get('/', function (req, res) {
  res.send('Hello All. I am fond of cars. click here'.fontcolor("blue").fontsize(1000).italics().link("http://www.fawadshaikh.com/images/panda.jpg"))})
app.get('/abhi', function (req, res) {
  res.send('<h1>My Friends are </h1><h3>Nandu-heroine,ravi-chandramukhi,samanth-police,guna-classical dancer,deepak-leki,battu-arabic</h3>'.fontcolor("purple").italics())
})

app.get('/myself', (req, res) => {
  res.send('<h3>I am introvert only before i am not close to someone</h3>')
})

app.get('/greeting/:id',  (req, res) =>{
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/hey/:dude',  (req, res) =>{
  res.send('<h3>hey, ' + req.params.dude + ' How are you doing!</h3>')

})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})