const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 20
  },
  email: {
    type: String,
    trim: true, // 빈칸 없애주는 역할
  },
  password: {
    type: String,
    maxlength: 20
  }, 
  role : {  // 관린자 생각하기
    type: Number, 
    default: 0
  }, 
  image: String,
  token : { // 유효성 체크
    type: String,
  },
  tokenExp: { // 유효성의 유효기한
    type: Number,
  },
})

const User = mongoose.model('User', userSchema)

module.exports = { User } // 다른 곳에서 사용할 수 있도록 