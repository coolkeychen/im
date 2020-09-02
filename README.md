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
   * React 开发单页应用必备，践行路由即组件概念
   * 核心概念：动态路由、Route、Link、Switch
   ```
   Npm install react-router-dom --save
   yarn add react-router-dom -S
   ```
   * BrowseRouter, 包裹整个应用
   * Router 路由对应渲染的组件，可嵌套
   * Link 跳转专用
   * url 参数， Route组件参数可用冒号标识参数
   * Redirect 组件 跳转
   * Switch 只渲染一个子 Route 组件
   和redux 配合
   * 复杂 redux 应用，多个 reducer, 用combineReducers 合并
   * Redirect组件跳转
   * Switch 只渲染一个子Route组件   
16. 项目骨架
   1. src前端源码目录
   2. server 后端 express目录
   3. 核心功能文件夹：component, container,reducers等
17. 页面骨架
   * 进入应用时获取用户信息，用户未登录跳转 login 页面
   * Login和Register页面不需要权限认证
   * 用户信息，聊天列表，职位列表页面共享底部 tabbar
   * Mongodb 字段设计
   * axios 发送异步请求
   * redux 管理所有数据，组件尽量用 antd-mobile, 弱化 css
18. 前后端联调
   * 使用 axios 发送异步请求
      * 如何发送，端口不一致，使用 proxy 配置转发
      * axios 拦截器，统一 loading 处理
      * redux 里使用异步数据，渲染页面
   * 安装  axios   
   简洁好用的发送请求库
   ```
   npm install axios --save
   ```
   * 配置转发
   ```
   'proxy':'localhost:9093'
   ```
   * Axios.interceptors 设置拦截器，比如全局的 loading
   * Axios.get, .post 发送请求， 返回 promise 对象
   * Redux 里获取数据， 然后 dispath
19. 页面文件结构
   1. 骨架结构实现
      * 组件放在 Component 文件夹下面
      * 页面放在 Container 文件夹下面
      * 页面入口处获取用户信息，决定跳转到哪个页面
   2. 基于 cookie 用户验证
      * express 依赖 cookie-parser
      ```
      npm install cookie-parser --save
      ```
      * cookie 类似于一张身份卡，登录后服务器端返回，你带着 cookie 就可以访问受限资源
      * 页 cookie 的管理浏览器会自动处理
   3. 安装 body-parser
      ```
      yarn add body-parser --save
      ```
20. 安装 browser-cookies
      ```
      yarn add browser-cookies --save
      ```
21. socket.io
   * 基于事件的实时双向通信库
      * 基于 websocket 协议
      * 前后端通过事件进行双向通信
      * 配合 express，快速开发实时应用
22. socket 和 Ajax 的区别
   * Ajax 基于 http 协议，单向，实时获取数据只能轮询
   * socket.io 基于 websocket 双向通信协议，后端可以主动推送数据
   * 现代浏览器都支持 websocket 双向通信协议，没什么兼容性问题
   * 安装服务端
   ```
    yarn add socket.io --save
   ```
   * 安装客户端
   ```
    yarn add socket.io-client --save
   ```
