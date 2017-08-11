# `react-native` 练手项目

## 目前只支持`ios`
系统目前只支持`mac`

```base
➜ git clone https://github.com/angelporo/App.git -b dev
➜ cd App
➜ npm install
➜ npm start
```

## 目录结构
```
└── src
  ├── config  // 项目配置文件
  │   └── config-styles.js
  ├── modules     //项目组件文件夹
  │   ├── cityData.json
  │   ├── hint.js
  │   ├── img      // 组件内部图片文件夹
  │   │   ├── star@2x.png
  │   │   └── star@3x.png
  │   ├── input.js
  │   ├── person-asset.js
  │   ├── person-order.js
  │   ├── personHead.js
  │   ├── test.js
  │   └── util.js
  ├── redux     // redux逻辑文件
  │   ├── initSate.js  // 初始化state文件，目前没有用处
  │   ├── reducer  // 针对功能存放组件 redux中的type和相应action以及reducer的操作
  │   │   └── user.js
  │   ├── state  // 针对功能存放app中的初始化state
  │   │   ├── goodsClassState.js
  │   └── store  // redux中制作store
  │       └── store.js
  └── view       // 通过组件制作的各个页面
      ├── hotSell.js
      ├── img    // 页面中使用到的图片文件夹
      │   ├── search@2x.png
      │   └── search@3x.png
      ├── login.js
      └── userInfo.js
```

简单说下项目的技术栈,
`react-native`,  `redux`, `immutable`, 还有一些第三方`react-native` 库

### 说一下`state`中的设计
没有吧所有的`state`放在全局的`store`中,
只是全局共有的`state`放到了`store`内, 页面中的状态还是在页面中修改.
而全局影响的state则放到了store中

这个设计也是想了很久. 希望大佬们交流

第一次完完整整的写react-native项目. 原本想的这个项目要做一个电商类的完整项目,
可以下单, 角色目前只打算写一个用户的角色, 没有很多, 小白一个, 希望大神给予意见

东西可真不是一个人写的... 累死宝宝了

如果有感兴趣的小伙伴欢迎 `fork`
