/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import icon from './icon';
import metadata from './block.json';
import save from './save';
import transforms from './transforms';
import './style.scss';

registerBlockType( metadata.name, {
	deprecated,
	edit,
	icon,
	save,
	transforms,
	providesContext: {
		'yard/tabs-current-tab': 'currentTab',
	},
} );
