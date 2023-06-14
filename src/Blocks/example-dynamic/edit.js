/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

const Edit = () => {
	return (
		<p { ...useBlockProps() }>
			{ __(
				'Example Dynamic – hello from the editor!',
				'yard-gutenberg'
			) }
		</p>
	);
};

export default Edit;
