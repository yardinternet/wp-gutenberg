const defaultConfig = require( '@wordpress/scripts/config/webpack.config' ); // Original config from the @wordpress/scripts package.
const {
	addPackagesToConfig,
} = require( '@yardinternet/gutenberg-webpack-loaders' );

module.exports = {
	...addPackagesToConfig( defaultConfig, [
		'@yardinternet/gutenberg-components',
		'@yardinternet/gutenberg-hooks',
	] ),
	entry: {
		...defaultConfig.entry(),
		menu: [ './src/Menu/resources/scss/style.scss' ],
		patterns: [
			'./src/MyPatterns/resources/scss/style.scss',
			'./src/MyPatterns/resources/js/index.js',
		],
		hooks: [ './src/Hooks/resources/js/index.js' ],
	},
};
