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
	const { listText, linkUrl, opensInNewTab } = attributes;

	const linkProps = opensInNewTab
		? { target: '_blank', rel: 'noopener noreferrer' }
		: {};

	return (
		<li { ...useBlockProps.save() }>
			<Icon { ...props } />

			{ linkUrl ? (
				<a
					href={ linkUrl }
					{ ...linkProps }
					className="wp-block-yard-iconlist-item__link"
				>
					<RichText.Content value={ listText } />
				</a>
			) : (
				<RichText.Content
					className="wp-block-yard-iconlist-item__text"
					tagName="span"
					value={ listText }
				/>
			) }
		</li>
	);
};

export default Save;
