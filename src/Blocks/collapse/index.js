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
import transforms from './transforms';

console.log( icon );

registerBlockType( metadata.name, {
	edit,
	icon,
	save,
	transforms,
} );
