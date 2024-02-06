/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import Number from './components/number';

const Edit = ( props ) => {
	return (
		<>
			<Inspector { ...props } />

			<div { ...useBlockProps() }>
				<Number { ...props } />
			</div>
		</>
	);
};

export default Edit;
