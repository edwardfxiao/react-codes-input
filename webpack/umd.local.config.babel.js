const baseConfig = require('./umd.base.config.babel.js');
const PATH = require('./build_path');
module.exports = {
	...baseConfig,
	entry: PATH.ROOT_PATH + 'src/js/Input/index.tsx',
	devtool: false,
	output: {
		...baseConfig.output,
		path: PATH.ROOT_PATH + '/lib/components',
		filename: 'index.js',
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
	},
};
