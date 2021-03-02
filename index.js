const express = require('express')
const app = express()
const port = 5100

const bodyParser = require('body-parser');
const { User } =  require('./models/User');

// application / x-www-form-urlencoded  데이터를 분석해서 가져오게 하는 것
app.use(bodyParser.urlencoded({extended: true}));
// application / json 데이터를 분석해서 가져오게 하는 것
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tlsdud1375:ekffur91@react-clone.mktja.mongodb.net/react-clone?retryWrites=true&w=majority', { 
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => { console.log( 'MongoDB Connected...')})
  .catch((err) => { console.log(err)})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 회원가입 위한 라우터
app.post('/resigster', (req, res) => {
  // 회원 가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)
  // bodyParser 있기 때문에 req에 body에서 정보를 가져올 수 있다.
  console.log(user)

  user.save((err, userInfo ) => {
    if (err) return res.josn({ success: false, err})
    return res.status(200).json({  success: true })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})