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
	const { headingLevel, headingText, icon, id } = attributes;
	const HeadingWithLevel = headingLevel;

	return (
		<>
			<HeadingWithLevel
				{ ...useBlockProps.save( {
					className: 'wp-block-yard-tabs-item__heading',
				} ) }
			>
				<button
					id={ `tabs-item-button-${ id }` }
					className="wp-block-yard-tabs-item__button"
					role="tab"
					aria-controls={ `tabs-item-panel-${ id }` }
					aria-selected="false"
				>
					{ icon && <Icon { ...props } /> }
					{ headingText }
				</button>
			</HeadingWithLevel>

			<div
				{ ...useBlockProps.save( {
					className: 'wp-block-yard-tabs-item__panel',
				} ) }
				id={ `tabs-item-panel-${ id }` }
				role="tabpanel"
				aria-hidden="true"
				aria-labelledby={ `tabs-item-button-${ id }` }
			>
				<InnerBlocks.Content />
			</div>
		</>
	);
};

export default Save;
