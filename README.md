## 技术栈

React + Redux + ReactRouter + Webpack + Antd

## 项目结构

```
react-web-template
├── config
    └── jest
    └── env.js
    └── test.js
    └── build.js
    └── start.js
    └── test.js
├── public
    └── favicon.ico
    └── index.html
    └── manifest.json
├── scripts
    └── build.js
    └── start.js
    └── test.js
├── src
    └── app
    └── assets
    └── components
    └── global
    └── mock
    └── modules
    └── utils
├── .editorconfig
├── .eslinttrc.js
├── .gitignore
├── .stylelintrc
├── .gitignore
├── package.json
├── README.md
```

## Mock.js代理请求

使用mock.js代理请求返回数据，脱离后端独立运行，src/mock.js为统一拦截入口，
在app/index.js中关闭该功能

```
 // 目前只在本地开发环境进行拦截，不引入mock.js即可关闭
if (process.env.NODE_ENV === 'development') {
  require('../mock')
}

```

## 支持装饰器写法

```
  // src/modules/login/index.js
  @Form.create()
  @connect(state => {
    return {
      userInfo: state.userLogin
    }
  })
```

## 支持Antd主题定制

Antd支持自定义主题，项目已配置完成，只需修改package.js的theme即可。

## work-box

项目引入work-box，通过service-worker进行JS、CSS、图片的缓存。
