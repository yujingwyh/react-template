# react
react基座

## 快速开始

#### 本地

1. 安装依赖， npm install
2. 本地编译， npm run dev

#### 线上

1. 编译， npm run build
2. 项目根目录 /dist

## 约定

* api接口直接写到页面中，不要搞service目录
* 资源在用的地方通过require引入
* 文件名采用小写，多个单词用-连接

### 文件规范

页面级别约定如下                                   <br />
<br />
|-- common    <br />
|   |-- assets   <br />
|   |   |-- activity    <br />
|   |       |-- a.png  <br />
|   |-- component-x  <br />
|   |   |-- index.tsx   <br />
|   |   |-- style.module.less   <br />
|   |-- component-y   <br />
|   |   |-- index.tsx   <br />
|   |   |-- style.module.less   <br />
|   |-- utils   <br />
|   |   |-- request.ts   <br />
|   |   |-- time.ts   <br />
|-- context   <br />
|   |-- setting.ts   <br />
|   |-- user.tsx   <br />
|-- pages   <br />
|   |-- a   <br />
|   |   |-- detail.tsx   <br />
|   |   |-- list.tsx   <br />
|   |   |-- style.module.less   <br />
|   |   |-- common   <br />
|   |   |   |-- assets   <br />
|   |   |   |-- component-x   <br />
|   |   |   |   |--index.tsx   <br />
|   |   |   |-- utils   <br />
|   |-- b   <br />
|   |   |-- index.tsx   <br />
|   |   |-- style.module.less   <br />
