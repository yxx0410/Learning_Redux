# React Starter Kit

### Getting started
1. Install Node >= 8.x
2. `git clone https://github.com/yxx0410/react-kit.git my-app`
3. `cd my-app`
4. `rm -rf .git`
5. `npm install`
6. `npm start`

## webpack
- install webpack webpack-cli webpack-dev-server
- install html-webpack-plugin error-overlay-webpack-plugin uglifyjs-webpack-plugin
- install babel-loader style-loader css-loader eslint-loader (sass-loader ts-loader) 
- config webpack and plugin
### loaders
1. style-loader、css-loader、less-loader、sass-loader
2. raw-loader、file-loader 、url-loader
3. babel-loader、coffee-loader 、ts-loader
4. mocha-loader、jshint-loader 、
5. eslint-loader (enforce：preload -- preload js as eslint rules)

### webpack plugins
1. html-webpack-plugin: automatically generate html file for bundle ;
2. error-overlay-webpack-plugin: display an error overlay in your application;
3. webpack.DefinePlugin:  create global constants which can be configured at compile time. (JSON.stringify)
4. clean-webpack-plugin: clear files of target directory 
5. copy-webpack-plugin: Copies individual files or entire directories to the build directory.
6. uglifyjs-webpack-plugin: This plugin uses uglify-js to minify your JavaScript.
7. webpack.HotModuleReplacementPlugin: Enables Hot Module Replacement, otherwise known as HMR HMR should never be used in production.
8. webpack.providePlugin: Automatically load modules instead of having to import or require them everywhere.
9. mini-css-extract-plugin: extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
10. webpack-bundle-analyzer: Visualize size of webpack output files with an interactive zoomable treemap.


## babel
- install @babel/core @babel/cli @babel/preset-env @babel/polyfill
- install babel-preset-env babel-preset-react
- install babel-plugin-transform-class-properties babel-plugin-transform-object-rest-spread
babel-plugin-transform-runtime
- config: .babelrc
### presets
1. @babel/preset-env: a smart preset that allows you to use the latest JavaScript without needing to micromanage(targets.node:current)
2. @babel/preset-react: 
### plugins
1. react-hot-loader/babel:
2. @babel/plugin-proposal-class-properties
3. @babel/plugin-proposal-decorators

## eslint
- install eslint 
- install babel-eslint
- install eslint-config-prettier eslint-config-standard eslint-config-standard-react

### parser
"babel-eslint"
### plugin
eslint-plugin-react
eslint-plugin-jsx-a11y: 
eslint-plugin-node: 
eslint-plugin-promise:
eslint-plugin-import 


### extend eslint
"eslint:all"
"eslint:recommended", (default)
"plugin:react/recommended" (from plugins)
eslint-config-standard (defined by other)
eslint-config-standard-react
eslint-config-standard-prettier

### rules
...
### env: for different environment variables
### globals: set in definePlugin