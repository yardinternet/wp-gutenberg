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
import './style.scss';

registerBlockType( metadata.name, {
	edit,
	icon,
	save,
	deprecated,
	usesContext: [ 'yard/iconlist-use-link-component' ],
} );
