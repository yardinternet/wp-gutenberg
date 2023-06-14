/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Icon from '@components/icon';

const Save = ( props ) => {
	const { attributes } = props;
	const { listText } = attributes;

	return (
		<li { ...useBlockProps.save() }>
			<Icon { ...props } />
			<RichText.Content
				className="wp-block-yard-gutenberg-iconlist-item__text"
				tagName="span"
				value={ listText }
			/>
		</li>
	);
};

export default Save;
