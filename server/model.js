const mongoose = require('mongoose')

// 链接 mongo
const DB_URL = 'mongodb://127.0.0.1:27017/im-chat'
mongoose.connect(DB_URL)
// mongoose.connection.on('connected',function (params) {
//   console.log('mongo connect success');
// })

const models = {
  user : {
    'user': { 'type': String, 'required': true },
    'pwd': { 'type': String, 'required': true },
    'type': { 'type': String, 'required': true },
    'avatar': { 'type': String },
    'desc': { 'type': String },
    'title': { 'type': String },
    'company': { 'type': String },
    'money': { 'type': String}
  },
  chat : {
    'chatid': { 'type': String, 'required': true },
    'from': { 'type': String, 'required': true },
    'to': { 'type': String, 'required': true },
    'read': { 'type': Boolean, 'default': false },
    'content': { 'type': String, 'required': true, 'default': '' },
    'create_time': { 'type': Number, 'default': new Date().getTime()}
  }
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
  
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}