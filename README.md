
# jzcapp 练手项目

## 目录结构
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


## 功能介绍
如果后期有时间， 配置文件内不需要添加配置内容

