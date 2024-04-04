const defaultConfig = require( '@wordpress/scripts/config/webpack.config' ); // Original config from the @wordpress/scripts package.
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );
const {
	addPackagesToConfig,
} = require( '@yardinternet/gutenberg-webpack-loaders' );

module.exports = {
	...addPackagesToConfig( defaultConfig, [
		'@yardinternet/gutenberg-components',
		'@yardinternet/gutenberg-hooks',
	] ),
	entry: {
		...getWebpackEntryPoints(), // Automatically find and generate the block.json entry points

		// Add additional entry points here.
		editorSettings: [ './src/EditorSettings/resources/js/index.js' ],
		menu: [ './src/Menu/resources/scss/style.scss' ],
		settingsPage: [
			'./src/SettingsPage/resources/js/index.js',
			'./src/SettingsPage/resources/scss/style.scss',
		],
	},
};
