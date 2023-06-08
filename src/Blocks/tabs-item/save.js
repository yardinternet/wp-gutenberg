/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const save = ( props ) => {
	const { attributes } = props;
	const { id, headingLevel, headingText } = attributes;
	const HeadingWithLevel = headingLevel;

	return (
		<>
			<HeadingWithLevel
				{ ...useBlockProps.save( {
					id: `tabs-item-heading-${ id }`,
					className: 'wp-block-yard-gutenberg-tabs-item__heading',
				} ) }
			>
				<button
					id={ `tabs-item-button-${ id }` }
					className="wp-block-yard-gutenberg-tabs-item__button"
					aria-controls={ `#tabs-item-panel-${ id }` }
					type="button"
				>
					{ headingText }
				</button>
			</HeadingWithLevel>

			<div
				{ ...useBlockProps.save( {
					className: 'wp-block-yard-gutenberg-tabs-item__panel',
				} ) }
				id={ `tabs-item-panel-${ id }` }
				aria-hidden="true"
			>
				<InnerBlocks.Content />
			</div>
		</>
	);
};

export default save;
