module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },
  resolve: {
	  modulesDirectories: ['src', 'node_modules'],
	  alias: {
		  "jquery": "lib/jquery/dist/jquery",
		  "mustache": "lib/mustache.js/mustache",
		  "backbone": "lib/backbone/backbone.js"
	  }
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components|lib)/,
      loader: 'babel',
      query: {
        presets: ['es2015' ]
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
	   	test: /mustache/,
	   	loader: 'exports?mustache'
	}, {
		test: /backbone/,
	   	loader: 'exports?Backbone!imports?mustache,jquery'
	}]
  }
};
