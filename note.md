### yarn
    特点：
    1. 快
    2. 安全
    3. 更简洁的输出
    4. 更好的语义化

    ```
        yarn add react-router // npm i react-router
    ```


### ts 中安装react-router radux...
    ```
        yarn add react-router-dom @types/react-router-dom
        yarn add axios @types/axios
        yarn add less-loader @types/axios -D
        yarn add stylus-loader @types/stylus-loader -D
        yarn add stylus @types/stylus -D
    ```

### 暴露项目配置
    ```
        yarn eject
        Are you sure you want to eject? This action is permanent: y
    ```

### react-app-rewired --按需引入antd的组件
    ```
        $ yarn add react-app-rewired --dev


        /* package.json */
        "scripts": {
        "start": "react-scripts-ts start",
        "build": "react-scripts-ts build",
        "test": "react-scripts-ts test --env=jsdom",

        "start": "react-app-rewired start --scripts-version react-scripts-ts",
        "build": "react-app-rewired build --scripts-version react-scripts-ts",
        "test": "react-app-rewired test --env=jsdom --scripts-version react-scripts-ts"
        }
    ```

    然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。

    ```
        module.exports = function override(config, env) {
            // do stuff with the webpack config...
            return config;
            };
    ```

##### 使用 ts-import-plugin --实现按需加载
    ts-import-plugin 是一个用于按需加载组件代码和样式的 TypeScript 插件（原理），现在我们尝试安装它并修改 config-overrides.js 文件
    ```
        arn add ts-import-plugin --dev

        /* config-overrides.js */
        const tsImportPluginFactory = require('ts-import-plugin')
        const { getLoader } = require("react-app-rewired");

        module.exports = function override(config, env) {
        const tsLoader = getLoader(
            config.module.rules,
            rule =>
            rule.loader &&
            typeof rule.loader === 'string' &&
            rule.loader.includes('ts-loader')
        );

        tsLoader.options = {
            getCustomTransformers: () => ({
            before: [ tsImportPluginFactory({
                libraryDirectory: 'es',
                libraryName: 'antd',
                style: 'css',
            }) ]
            })
        };

        return config;
        }
    ```

    > 报错 ```can not find nodule 'react-scripte-ts/package.json'```
    ```
        yarn add react-scripte-ts -D

        yarn start // success
    ```

### 遇到的问题
2018-08-12 onClick传递函数是报错
1. onClick={handler} // 方法不是void类型的 ”不能写括号“，否则会报错，类型不匹配：Types of property 'onClick' are incompatible.
    ```
        // 这里onClick事件不能{handler()}---> 应该是{handker},或者使用箭头函数不会报错
       <Button type="primary" onClick={ this.openNotification('success) }>Open the notification box</Button>
    ```
    2. 标签里使用() => {}会报错：Lambdas are forbidden in JSX attributes due to their rendering performance impact
    ```
        // 使用箭头函数有新的问题汇报：不能使用Lambdas表达式----一个方法是取消ts-lint jsx-no-lambda的错误检查
       <Button type="primary" onClick={ () => this.openNotification('success) }>Open the notification box</Button>
    ```
##### 解决 使用bind传递参数
    ```
       <Button type="primary" onClick={ this.openNotification.bind(this, 'success') }>Open the notification box</Button>
    ```

    > 是否有其他解决方案？