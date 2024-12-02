/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import icon from './icon';
import metadata from './block.json';

registerBlockType( metadata, {
	edit,
	icon,
	save,
	usesContext: [ 'yard/timeline-is-ordered-list' ],
} );
