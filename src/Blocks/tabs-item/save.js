/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import { Icon } from '@yardinternet/gutenberg-components';

const Save = ( { attributes } ) => {
	const { headingText, icon, id } = attributes;

	return (
		<>
			<button
				data-tab-button
				id={ `tabs-item-button-${ id }` }
				role="tab"
				className="wp-block-yard-tabs-item__button"
				aria-controls={ `tabs-item-panel-${ id }` }
				aria-selected="false"
			>
				{ icon && <Icon icon={ icon } /> }
				{ headingText }
			</button>

			<div
				data-tab-panel
				id={ `tabs-item-panel-${ id }` }
				role="tabpanel"
				className="wp-block-yard-tabs-item"
				aria-labelledby={ `tabs-item-button-${ id }` }
				hidden
			>
				<InnerBlocks.Content />
			</div>
		</>
	);
};

export default Save;
