# Webpack Packages
Its a list of packages guide that are used in package.json file.It also explains the need to use it.


## Packs

* [`webpack`] To use webpack main functionalities.
* [`webpack-cli`] To use webpack for commad line interface. 
* [`cross-env`] This package makes access the environment variables to cross platform.
* [`sass`] This package installs sass components.


## Loaders

* [`babel-loader`] This package allows transpiling JavaScript files using Babel.
* [`css-loader`] This package reads style files in string format and passes it to style loader.
* [`style-loader`] This package reads appends inline style files to our html files.
* [`sass-loader`] This package loads .scss file.
* [`postcss-loader`] This package helps to use autoprefixer plugin.
* [`file-loader`] This package provides resolves import/require() on a file into a url and emits the file into the output directory.
* [`uglifyjs-webpack-plugin`] This pakacge removes etra spaces from js files thus making it uglify.


## Plugins

* [`mini-css-extract-plugin`] This package extracts css when bundling up.
* [`clean-webpack-plugin`] This package helps in cleaning the dist folder everytime it is created.
* [`autoprefixer`] This postcss plugin helps in adding vender prefixes for browser not suppoting that style.
* [`cssnano`] This postcss plugin helps in removing extra spaces and indents in our output css file.


## Babel

* [`@babel/core`] This package required by babel-loader and contains all babel functionalties
* [`@babel/preset-react`] This package converts jsx into browser readable js.
* [`@babel/preset-env`] This package converts es6 into es5.
* [`@babel/polyfill`] To extend features for browser that are not supported. 
* [`corejs@3`] Required by @babel/polyfill.


## Server Setup
* [`webpack-dev-server`] This package hepls in live reloding through local server.



[`webpack`]:      https://webpack.js.org
[`webpack-cli`]:  https://webpack.js.org/api/cli
[`babel-loader`]: https://github.com/babel/babel-loader
[`css-loader`]: https://webpack.js.org/loaders/css-loader
[`style-loader`]: https://webpack.js.org/loaders/style-loader
[`cross-env`]: https://www.npmjs.com/package/cross-env
[`sass`]: https://sass-lang.com
[`sass-loader`]: https://webpack.js.org/loaders/sass-loader
[`postcss-loader`]: https://webpack.js.org/loaders/postcss-loader
[`file-loader`]: https://webpack.js.org/loaders/file-loader
[`mini-css-extract-plugin`]: https://webpack.js.org/plugins/mini-css-extract-plugin
[`clean-webpack-plugin`]: https://www.npmjs.com/package/clean-webpack-plugin
[`autoprefixer`]: https://www.npmjs.com/package/autoprefixer
[`cssnano`]: https://cssnano.co
[`@babel/core`]: https://www.npmjs.com/package/@babel/core
[`@babel/preset-react`]: https://babeljs.io/docs/en/babel-preset-react
[`@babel/preset-env`]: https://babeljs.io/docs/en/babel-preset-env
[`@babel/polyfill`]: https://babeljs.io/docs/en/babel-polyfill
[`corejs@3`]: https://www.npmjs.com/package/core-js
[`webpack-dev-server`]: https://webpack.js.org/configuration/dev-server
[`uglifyjs-webpack-plugin`]: https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
