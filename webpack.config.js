// Import the original config from the @wordpress/scripts package.
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

// Import the helper to automatically find and generate the block entry points in the src directory based on block.json.
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );

// Add any new entry point by extending the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
		// Add additional entry points here.
		editorSettings: [ './src/EditorSettings/resources/js/index.js' ],
		menu: [ './src/Menu/resources/scss/style.scss' ],
		settingsPage: [
			'./src/SettingsPage/resources/js/index.js',
			'./src/SettingsPage/resources/scss/style.scss',
		],
	},
};
