const express = require('express')
const mongoose = require('mongoose')

// 链接 mongo
const DB_URL = 'mongodb://127.0.0.1:27017/im'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function (params) {
  console.log('mongo connect success');
})

// 类似于 mysql 的表，mongo里有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: {type:String, require: true},
  age: {type:Number, require:true}
}))

// 新增数据
// User.create({
//   user: 'cat',
//   age: 18
// }, function (err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })

// 删除数据
// User.remove({age:99},function (err, doc) {
//   console.log(doc)
// })

// 更新数据
// User.update({'user': 'dog'},{'$set':{age: 33}},function(err, doc) {
//   console.log(doc)
// })

// 新建app
const app = express()

app.get('/',function(req,res) {
  res.send('<h1>Hello world</h1>')
})

app.get('/data',function(req,res) {
  User.find({},function (err,doc) {
    res.json(doc)
  })
  // res.json({
  //   name: 'cat',
  //   course: 'React 开发'
  // })
})

app.listen(9093,function() {
  console.log('Node app start at port 9093')
})