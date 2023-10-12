/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';

const Edit = ( props ) => {
	const { attributes } = props;

	return (
		<div { ...useBlockProps() }>
			<Inspector { ...props } />

			<ServerSideRender
				block="yard-gutenberg/query"
				attributes={ attributes }
			/>
		</div>
	);
};

export default Edit;
