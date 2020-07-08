# im 类似询职聊天室
react, redux, node.js 全栈工程师

1. ### create-react-app im 创建并初始化 React 项目

2. ### 文件目录树结构展示
```
im
├── public ── ── ── ── ── ── ── ── ── ──  公共资源
│   ├── favicon.ico
│   ├── index.html  ── ── ── ── ── ── ──  首页html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src  ── ── ── ── ── ── ── ── ── ── ── 源码目录
│   ├── App.css   ── ── ── ── ── ── ── ── CSS文件
│   ├── App.js ── ── ── ── ── ── ── ── ── React组件
│   ├── App.test.js
│   ├── index.css
│   ├── index.js  ── ── ── ── ── ── ── ── 入口js文件
│   ├── logo.svg
│   ├── serviceWorker.js
│   └── setupTests.js
├── README.md  ── ── ── ── ── ── ── ── ── 介绍文档
├── package.json  ── ── ── ── ── ── ── ── npm 项目配置
└── yarn.lock  ── ── ── ── ── ── ── ── ── yarn 版本锁定配置文件
```

3. ### 安装 redux 第三方库
```
yarn add redux --save
npm install redux --save
```

4. ### npm run eject 弹出配置文件，可以自定义配置 webpack
```
npm run eject
```

5. ### ES6 语法
* 新的 javascript 语法标准
* 使用 babel 语法转换器，支持低端浏览器
* 流行的库基本上都基于ES6构建，React 默认使用 ES6 新语法开发

6. Express+mongodb 开发web 后台接口
* Express 开发web 接口
* 非关系型数据库 mongodb
* 使用 nodejs 的 mongoose 模块链接和操作 mongodb

7. Express
```
npm install express --save
yarn add express -S
```
* 监听路由和响应数据，使用 nodemon 自动重启
```
npm install nodemon -g
nodemon server.js
```
* app.get 和 app.post 分别开发 get 和 post 接口
* app.use 使用模块
* res.send、res.json、res.sendfile 响应不同的内容
8. Mongodb
* 安装 
* 配置环境
```
 mongod --dbpath "D:\DataBase\MongoDB\data\" --logpath "D:\DataBase\MongoDB\log\mongod.log" -install -serviceName "MongoDB"
```
* 启动 mongodb 服务
```
net start mongodb
```
* 安装 mongoose   
```
npm install mongoose -S
yarn add mongoose -S
```
* 定义文档模型，Schema和Model新建模型
   1. String, Number 等数据结构
   2. 定 create, remove, update 分别用来增、删、改的操作
   3. find, findOne 查找数据 
   4. update 更新数据
   5. remove 删除数据
* mongoose 独立工具函数
* express 使用 body-parser 支持 post参数
* 使用 cookie-parser 存储登录信息 cookie