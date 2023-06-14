/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Icon from '@components/icon';
import Inspector from './components/inspector';

const edit = ( props ) => {
	const { attributes } = props;
	const { icon } = attributes;

	return (
		<div { ...useBlockProps() }>
			<Inspector { ...props } />
			{ icon && <Icon { ...props } /> }
		</div>
	);
};

export default edit;
