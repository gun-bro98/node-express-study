const express = require('express');
const bird = require('./routes/bird')
const app = express();
const port = 3000;

app.use('/bird', bird)

// 사용자정의 미들웨어
const myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

const requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);
app.use(myLogger);


app.get('/', (req, res, next) => {
  if(req.requestTime){
    console.log(req.requestTime);
  }
  next();
}, (req, res ) => {
  res.send('hello world!');
})

app.get('/about', (req, res) => {
  res.send('about!');
})

app.get('/random.text', (req, res) => {
  res.send('random.text');
})

app.get('/g(un)?bro', (req, res) => {
  res.send('gunbro!');
})

app.get(/gun/, (req, res) => {
  res.send('뷁!');
})

const cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

const cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

app.listen(port, () => {
  console.log(`현재 서버는 ${port}에서 돌고 있습니다.`)
})