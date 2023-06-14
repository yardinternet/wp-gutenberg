/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Icon from '@components/icon';

const Save = ( props ) => {
	const { attributes } = props;
	const { icon } = attributes;

	return (
		<div { ...useBlockProps.save() }>{ icon && <Icon { ...props } /> }</div>
	);
};

export default Save;
