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
		'yard-patterns': [ './src/YardPatterns/resources/scss/style.scss' ],
		patterns: [ './src/MyPatterns/resources/scss/style.scss' ],
		hooks: [
			'./src/Hooks/resources/js/index.js',
			'./src/Hooks/resources/scss/editor.scss',
		],
		'fontawesome-v6-shim': [
			'./src/Hooks/resources/js/fontawesome-v6-shim.js',
		],
	},
};
