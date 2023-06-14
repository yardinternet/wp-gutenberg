/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

const Edit = () => {
	return (
		<p { ...useBlockProps() }>
			{ __( 'Example – hello from the editor!', 'yard-gutenberg' ) }
		</p>
	);
};

export default Edit;
