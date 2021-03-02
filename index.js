const express = require('express')
const app = express()
const port = 5100

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tlsdud1375:ekffur91@react-clone.mktja.mongodb.net/react-clone?retryWrites=true&w=majority', { 
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => { console.log( 'MongoDB Connected...')})
  .catch((err) => { console.log(err)})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})