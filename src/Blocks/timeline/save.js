/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = () => {
	return (
		<div { ...useBlockProps.save() }>
			<div className="wp-block-yard-timeline-progress-line"></div>
			<div className="wp-block-yard-timeline-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default Save;
