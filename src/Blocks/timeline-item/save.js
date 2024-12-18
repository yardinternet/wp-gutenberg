/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = () => {
	return (
		<li { ...useBlockProps.save() }>
			<span className="wp-block-yard-timeline-item__line"></span>
			<span className="wp-block-yard-timeline-item__dot"></span>
			<div className="wp-block-yard-timeline-item__content">
				<InnerBlocks.Content />
			</div>
		</li>
	);
};

export default Save;
