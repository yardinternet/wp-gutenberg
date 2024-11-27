/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import { Icon } from '@yardinternet/gutenberg-components';

const Save = ( props ) => {
	const { attributes } = props;
	const {
		hasStructuredData,
		headingLevel,
		headingText,
		icon,
		isOpen,
		anchor,
	} = attributes;
	const HeadingWithLevel = headingLevel;

	const { id, ...blockProps } = useBlockProps.save( {
		className: 'wp-block-yard-collapse-item | ac',
	} );

	return (
		<div
			{ ...blockProps }
			data-open={ isOpen }
			itemScope={ hasStructuredData }
			itemProp={ hasStructuredData ? 'mainEntity' : null }
			itemType={
				hasStructuredData ? 'https://schema.org/Question' : null
			}
		>
			<HeadingWithLevel
				className="wp-block-yard-collapse-item__header | ac-header"
				id={ anchor }
			>
				<button
					type="button"
					className="wp-block-yard-collapse-item__header-button | ac-trigger"
					itemProp={ hasStructuredData ? 'name' : null }
				>
					{ icon && <Icon { ...props } /> }
					{ headingText }
				</button>
			</HeadingWithLevel>
			<div
				className="wp-block-yard-collapse-item__panel | ac-panel"
				itemScope={ hasStructuredData }
				itemProp={ hasStructuredData ? 'acceptedAnswer' : null }
				itemType={
					hasStructuredData ? 'https://schema.org/Answer' : null
				}
			>
				<div
					className="wp-block-yard-collapse-item__panel-content"
					itemProp={ hasStructuredData ? 'text' : null }
				>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
};

export default Save;
