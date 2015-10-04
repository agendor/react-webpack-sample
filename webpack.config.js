
var webpack = require("webpack");

// For convenience we create variable that holds some used directories
var componentsDir = __dirname + '/src/';

function config() {
	var options = {
		watch: true,
		pathinfo: false,
		env: 'development'
	};

	var entry = {
		app: componentsDir + 'app.jsx',
		vendor: ['react']
	};
	var output = {
		path: './public/build',
		filename: "[name].js",
		library: ["ReactComponents"],
		libraryTarget: "var",
		pathinfo: options.pathinfo
	};
	var _module = {
		loaders: [
			{ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.(png|jpg|svg|ttf|woff|eot)/, loader: "url-loader?limit=100000&mimetype=image/png" },
			{ test: /\.jsx$/, loader: 'jsx-loader' }
		]
	};
	var plugins = [
		new webpack.DefinePlugin({
			'process.env': {'NODE_ENV': JSON.stringify(options.env)}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js'
		}),
	];
	if(options.minimize) {
		plugins.push(
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.optimize.DedupePlugin(),
			new webpack.NoErrorsPlugin()
		);
	}
	var resolve = {
		modulesDirectories: [ __dirname, "web_modules", "node_modules"],
		extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
	};

	return {
		entry: entry,
		output: output,
		'module': _module,
		resolve: resolve,
		plugins: plugins,
		watch: options.watch
	};
};


module.exports = config();
