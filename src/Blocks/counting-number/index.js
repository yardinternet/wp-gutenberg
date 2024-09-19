/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import icon from './icon';
import metadata from './block.json';
import save from './save';
import deprecated from './deprecated';

registerBlockType( metadata.name, {
	edit,
	icon,
	save,
	deprecated,
} );
