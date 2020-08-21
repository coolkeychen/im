const express = require('express')
const Router = express.Router();
const model = require('./model')
const User = model.getModel('user')
const utils = require('utility')

Router.get('/list',function (req, res) {
  // 清除所有用户数据
  // User.remove({},function (e,d){})
  User.find({},function (err,doc) {
    res.json(doc)
  })
})

Router.post('/register',function (req, res) {
  console.log(req.body)
  // return res.json({code: 0})
  const {user,pwd,type} = req.body;
  User.findOne({user},function(err,doc){
    if (doc) {
      return res.json({code:1,msg: '用户已存在'})
    }
    User.create({user,pwd:md5Pwd(pwd),type},function(e,d){
      if (e) {
        return res.json({code:1, msg: '后端出错了'})
      }
      return res.json({code: 0})
    })
  })
})

Router.post('/login',function(req,res) {
  console.log(req.body)
  const {user,pwd} = req.body;
  User.findOne({user,pwd:md5Pwd(pwd)}, function(err,doc) {
    if (!doc) {
      return res.json({code: 1, msg: '用户不存在或者密码错误！'})
    }
    res.cookie(user_id,doc._id)
    return res.json({code: 0,data:doc})
  })
})

Router.get('/info',function (req,res) {
  return res.json({code:1})
})

function md5Pwd(pwd){
	const salt = 'imooc_is_good_3957x8yza6!@#IUHJh~~'
	return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router