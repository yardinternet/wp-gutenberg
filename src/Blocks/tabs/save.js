/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	const { defaultTab } = attributes;

	return (
		<div { ...useBlockProps.save() } data-default-tab={ defaultTab }>
			<div role="tablist" className="wp-block-yard-tabs__list">
				<InnerBlocks.Content />
			</div>

			<div className="wp-block-yard-tabs__panels">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
