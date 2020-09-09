const express = require('express')
const utils = require('utility')
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user')
const Chat = model.getModel('chat')
const { json } = require('body-parser');
const _filter = {'pwd':0,'__v':0}

Router.get('/list',function (req, res) {
  // 清除所有用户数据
  const type = req.query.type
  // User.remove({},function (e,d){})
  User.find({type},function (err,doc) {
    res.json({code: 0, data:doc})
  })
})

Router.get('/getmsglist',function (req, res) {
  // Chat.remove({},function (e,d){})
  const user = req.cookies.userid
  User.find({},function (e, userdoc) {
    let users =  {}
    userdoc.forEach(v => {
      users[v._id] = {name: v.user, avatar: v.avatar}
    })
    Chat.find({'$or':[{from:user},{to:user}]}, function (err,doc) {
      if (!err) {
        return res.json({ code: 0, data: doc,users})
      }
    })
  })
})

Router.post('/update',function (req, res) {
  const userid = req.cookies.userid;
  if (!userid) {
    return json.dump({code: 1})
  }
  const body = req.body
  User.findByIdAndUpdate(userid,body,function (err,doc) {
    const data = Object.assign({},{
      user: doc.user,
      type: doc.type
    },body)
    return res.json({code:0, data})
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

    const userModel = new User({user,pwd:md5Pwd(pwd),type});
    userModel.save(function (err,doc) {
      if (err) {
        return res.json({code:1, msg:'后端出错了'})
      }
      const {user,type,_id} = doc;
      res.cookie('userid',_id);
      return res.json({code:0, data:{user,type,_id}})
    })
    
  })
})

Router.post('/login',function(req,res) {
  console.log(req.body)
  const {user,pwd} = req.body;
  User.findOne({user,pwd:md5Pwd(pwd)} ,_filter , function(err,doc) {
    if (!doc) {
      return res.json({code: 1, msg: '用户不存在或者密码错误！'})
    }
    res.cookie('userid',doc._id)
    return res.json({code: 0,data:doc})
  })
})

Router.get('/info',function (req,res) {
  const {userid} = req.cookies;
  if (!userid) {
    return res.json({code:1})
  }
    
  User.findOne({_id:userid} ,_filter , function (err,doc) {
    if (err) {
      return res.json({code: 1, msg: '后端出错了'})
    }
    if (doc) {
      return res.json({code: 0, data: doc})
    }
  })
})

function md5Pwd(pwd){
	const salt = 'imooc_is_good_3957x8yza6!@#IUHJh~~'
	return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router