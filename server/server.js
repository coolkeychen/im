const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')


// 新建app
const app = express()
// 方便解析客户端传来的数据参数
app.use(bodyParser.json())
// 解析
app.use(cookieParser())
app.use('/user',userRouter);

// 类似于 mysql 的表，mongo里有文档、字段的概念
// const User = mongoose.model('user', new mongoose.Schema({
//   user: {type:String, require: true},
//   age: {type:Number, require:true}
// }))

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



app.get('/',function(req,res) {
  res.send('<h1>Hello world</h1>')
})

/* app.get('/data',function(req,res) {
  User.find({},function (err,doc) {
    res.json(doc)
  })
})
 */
app.listen(9093,function() {
  console.log('Node app start at port 9093')
})