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

registerBlockType( metadata.name, {
	edit,
	save,
	transforms,
} );
