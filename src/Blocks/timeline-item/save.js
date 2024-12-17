/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = () => {
	return (
		<li { ...useBlockProps.save() }>
			<span className="wp-block-yard-timeline-item-line"></span>
			<span className="wp-block-yard-timeline-item-dot"></span>
			<div className="wp-block-yard-timeline-item-content">
				<InnerBlocks.Content />
			</div>
		</li>
	);
};

export default Save;
