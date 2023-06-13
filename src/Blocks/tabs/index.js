/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import save from './save';
import transforms from './transforms';
import './style.scss';

registerBlockType( metadata.name, {
	edit,
	save,
	transforms,
	providesContext: {
		'yard-gutenberg/tabs-current-tab': 'currentTab',
	},
} );
