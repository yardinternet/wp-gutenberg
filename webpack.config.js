const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const {
	addPackagesToConfig,
} = require( '@yardinternet/gutenberg-webpack-loaders' );

const config = {
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
	},
};

/*
 * PHP-only blocks in `src/PhpBlocks` are registered straight from source and
 * must stay out of `build/`. They create no webpack entry point (their
 * block.json has no script fields), but wp-scripts' CopyPlugin would still copy
 * their block.json into the output, where the `--blocks-manifest` generator
 * would pick it up and add stray keys to `build/blocks-manifest.php`.
 *
 * Matched by duck-typing on `patterns` rather than the plugin's class name, so
 * this doesn't depend on wp-scripts' internal plugin ordering.
 */
config.plugins.forEach( ( plugin ) => {
	if ( ! Array.isArray( plugin?.patterns ) ) {
		return;
	}

	plugin.patterns = plugin.patterns.map( ( pattern ) => ( {
		...pattern,
		globOptions: {
			...pattern.globOptions,
			ignore: [
				...( pattern.globOptions?.ignore ?? [] ),
				'**/PhpBlocks/**',
			],
		},
	} ) );
} );

module.exports = config;
