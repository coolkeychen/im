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