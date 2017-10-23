const path = require('path');
const webpack = require('webpack');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
	entry: {
		main : "./src/main.js",
	},
	// output: {
	// 	path: path.join(__dirname, 'dist'),
	// 	filename: '[name].[hash].js'
	// },
 	module: {
        loaders: [
            {test: /\.vue$/,loader: 'vue'},
            {test:/\.js?$/,loaders:['babel'],exclude: /node_modules/},
            {
			    test: /\.(jpe?g|png|gif|svg)$/i,
			    loader: "url-loader?limit=8192&name=./[name].[ext]?[hash]"
			},
        ]
    },
	 resolve:{
        extensions: ['', '.js', '.vue'],
        alias:{
    		components:path.resolve(__dirname, './src/componets'),
            vue: 'vue/dist/vue.js',
            vueResource:"vue-resource/dist/vue-resource.min.js",
            vueWaterfall:"vue-waterfall/lib/vue-waterfall.min.js",
            vWaterfall:"v-waterfall/dis/waterfall.min.js"
        }
    },
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
		}),
		new CommonsChunkPlugin({
			name: "commons",
			// (the commons chunk name)

			filename: "commons.js",
			// (the filename of the commons chunk)

			minChunks: 2,
			// (Modules must be shared between 3 entries)

			chunks: ["index"]
				// (Only use these entries)
		}) //定义公共chunk
	]
}


