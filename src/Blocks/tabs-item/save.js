/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const save = ( props ) => {
	const { attributes } = props;
	const { id, headingText } = attributes;

	return (
		<>
			<button
				{ ...useBlockProps.save( {
					className: 'wp-block-yard-gutenberg-tabs-item__button',
				} ) }
				id={ `tabs-item-button-${ id }` }
				aria-controls={ `#tabs-item-panel-${ id }` }
				type="button"
			>
				{ headingText }
			</button>
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
