const express = require('express')
const path = require('path')
const app = express()
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/rand', (req, res) => {
  const rand = Math.floor(Math.random() * 100) + 1
  res.render('rand', { rand: rand })
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params
  const data = redditData[subreddit]
  if (data) {
    res.render('subreddit', { ...data })
  }else{
      res.render('notfound',{subreddit})
  }
})

app.get('/cats', (req, res) => {
  const cats = ['billi', 'bilaay', 'cat', 'bilaad']

  res.render('cats', { cats })
})

app.listen(8080, () => {
  console.log('listening to the server in india')
})
