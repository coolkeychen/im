const mongoose = require('mongoose')

// 链接 mongo
const DB_URL = 'mongodb://127.0.0.1:27017/im'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function (params) {
  console.log('mongo connect success');
})