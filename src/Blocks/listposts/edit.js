/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';

const Edit = ( props ) => {
	return (
		<div { ...useBlockProps() }>
			<Inspector { ...props } />
			<p>
				{ __(
					'Example Dynamic – hello from the editor!',
					'yard-gutenberg'
				) }
			</p>
		</div>
	);
};

export default Edit;
