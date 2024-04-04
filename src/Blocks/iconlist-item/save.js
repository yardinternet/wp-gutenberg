/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import { Icon } from '@yardinternet/gutenberg-components';

const Save = ( props ) => {
	const { attributes } = props;
	const { listText } = attributes;

	return (
		<li { ...useBlockProps.save() }>
			<Icon { ...props } />
			<RichText.Content
				className="wp-block-yard-iconlist-item__text"
				tagName="span"
				value={ listText }
			/>
		</li>
	);
};

export default Save;
