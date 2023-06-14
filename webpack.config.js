// Import the original config from the @wordpress/scripts package.
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

// Import the helper to automatically find and generate the block entry points in the src directory based on block.json.
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );

// Add any new entry point by extending the webpack config.
module.exports = {
	...defaultConfig,
	resolve: {
		alias: {
			'@components': path.resolve( __dirname, 'src/EditorComponents/' ),
		},
	},
	entry: {
		...getWebpackEntryPoints(),
		// Add additional entry points here.
		menu: [ './src/Menu/resources/scss/style.scss' ],
		settings: [
			'./src/Settings/resources/js/index.js',
			'./src/Settings/resources/scss/style.scss',
		],
	},
};
