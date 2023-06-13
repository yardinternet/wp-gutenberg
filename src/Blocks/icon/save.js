/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Icon from '../../EditorComponents/icon';

const save = ( props ) => {
	const { attributes } = props;
	const { icon } = attributes;

	return (
		<div { ...useBlockProps.save() }>{ icon && <Icon { ...props } /> }</div>
	);
};

export default save;
