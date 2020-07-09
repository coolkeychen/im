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
8. React 语法
   * 帮助你构建UI库
   * 一切皆组件
   * 全部使用ES6语法，Ver.16 版本核心代码重写，整体API变化不大
9. React 生命周期
   + 初始化周期
   + 组件重新渲染生命周期
   + 组件卸载声明周期
10. 安装 antd-mobile UI库
   ```
   yarn add antd-mobile@next -S
   ```
   ```
  
   ```
11. Redux
   * Redux 专注于状态管理，和 React 解耦
   * 单一状态，单向数据流
   * 核心概念： store, state, action, reducer
   * 首先通过 reducer 新建 store, 随时通过 store.getState 获取状态
   * 需要状态变更， store.dispatch (action) 来修改状态
   * Reducer 函数接受state和action,返回新的state, 可以用 store.subscribe 监听每次修改
12. Redux如何和 React一起用
   * 把 store.dispatch 方法传递给组件，内部可以调用修改状态
   * Subscribe 订阅render 函数，每次修改都重新渲染
   * Redux相关内容，移到单独的文件 index redux.js 单独管理
13. 更进一步处理异步、调试工具、更优雅的和 react 结合
   * Redux 处理异步，需要 redux-thunk 插件
   * Npm install redux-devtools-extension并且开启
   * 使用 react-redux 优雅的链接 react和 redux
   ```
   yarn add redux-thunk -S
   ```
   * 处理异步
      + Redux 默认只处理同步，异步任务需要 react-thunk 中间件
      + 使用 applyMiddleware 开启 thunk 中间件
      + Action 可以返回函数，使用 dispathch 提交 action
14. 使用 react-redux
   ```
   npm install react-redux --save
   ```
   * 忘记subscribe,记住 reducer, action 和 dispatch 即可
   * React-redux 提供 Provider 和 connect 两个接口来链接
   * Provider 组件在应用最外层，传入 store 即可，只用一次
   * Connect 负责从外部获取组件需要的参数
   * Connect 可以用装饰器的方式来写
   * 使用装饰器优化 connect 代码
      + npm run eject 弹出个性化配置
      + npm install babel-plugin-transform-decorators-legacy --save-dev 插件
      + package.json 里 babel 加上 plugins 配置
      ```
      ["@babel/plugin-proposal-decorators", { "legacy": true }]
      ```
15. React-router4 基础知识