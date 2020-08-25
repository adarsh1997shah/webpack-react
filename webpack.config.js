const path = require( 'path' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';


// Creating a configuration variable.
const config = {

	entry: {
		main: './src/index.js',
	},

	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: '[name].js',     // The name of the file comes from the “entry” object’s keys.
	},

	mode: NODE_ENV,

	devServer: {
		inline: true,
		hot: true,
		writeToDisk: true,
		openPage: 'main.html', // Open the specified page when the dev server opens
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					}
				],
			},
			{
				test: /\.(css|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins:[
								require( 'autoprefixer' ),
								//require( 'cssnano' ),
							]
						}
					},
					'sass-loader',
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images',   // The folder construct that you want your images in our output folder.
							publicPath: 'http://localhost:8080/dist/images',  // The path required to display in your browser.
						},
					},
				],
			},
		]
	},

	plugins: [
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} ),
		new CleanWebpackPlugin(),
	],

	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin( {
				sourceMap: true,
			} ),
			new UglifyJsPlugin( {
				sourceMap: true,
			} )
		],
	},
}


// Exporting the configuration.
module.exports = () => {

	if( NODE_ENV === 'production' ) {
		console.log( NODE_ENV );
		config.devtool = 'source-map';
	}else{
		console.log(NODE_ENV);
	}
	return config;
};