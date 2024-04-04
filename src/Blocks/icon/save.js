/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import { Icon } from '@yardinternet/gutenberg-components';

const Save = ( props ) => {
	const { attributes } = props;
	const { icon } = attributes;

	return (
		<div { ...useBlockProps.save() }>{ icon && <Icon { ...props } /> }</div>
	);
};

export default Save;
