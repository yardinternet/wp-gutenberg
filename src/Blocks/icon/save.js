/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Icon from './components/icon';

const save = ( props ) => {
	const { attributes } = props;
	const { altText, iconSize } = attributes;

	return (
		<p { ...useBlockProps.save() }>
			<Icon { ...props } />
			{ altText && <span className="sr-only">{ altText }</span> }
		</p>
	);
};

export default save;
