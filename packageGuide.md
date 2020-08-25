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

* babel/core
> This package required by babel-loader, containe all babe functionalties

* @babel/preset-react
> This package converts jsx into browser readable js.

* @babel/preset-env
> This package converts es6 into es5.


* mini-css-extract-plugin
> This package extracts css when bundling up.

* @babel/polyfill, corejs@3
> To extend features for browser that are not supported.

* file-loader
> This package provides resolves import/require() on a file into a url and emits the file into the output directory.

* clean-webpack-plugin
> This package helps in cleaning the dist folder everytime it is created.

* webpack-dev-server
> This package hepls in live reloding through local server.

* postcss-loader
> This package helps to use autoprefixer plugin.

* autoprefixer
> This postcss plugin helps in adding vender prefixes for browser not suppoting that style.

* cssnano
> This postcss plugin helps in removing extra spaces and indents in our output css file.


[`webpack`]:      https://webpack.js.org
[`webpack-cli`]:  https://webpack.js.org/api/cli
[`babel-loader`]: https://github.com/babel/babel-loader
[`css-loader`]: https://webpack.js.org/loaders/css-loader
[`style-loader`]: https://webpack.js.org/loaders/style-loader
[`cross-env`]: https://www.npmjs.com/package/cross-env
[`sass`]: https://sass-lang.com
[`sass-loader`]: https://webpack.js.org/loaders/sass-loader
