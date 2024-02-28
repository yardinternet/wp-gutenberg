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
import './style.scss';

registerBlockType( metadata.name, {
	edit,
	icon,
	save,
	usesContext: [ 'yard/tabs-current-tab' ],
} );
