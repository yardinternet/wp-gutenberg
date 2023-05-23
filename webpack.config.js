// Import the original config from the @wordpress/scripts package.
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

// Import the helper to automatically find and generate the entry points in the src directory based on block.json.
const {getWebpackEntryPoints} = require('@wordpress/scripts/utils/config');

// Add any new entry point by extending the webpack config.
module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
		// plugins: './src/patterns/index.js' // Add extra entrypoints here.
	}
};
