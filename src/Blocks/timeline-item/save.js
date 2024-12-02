/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Save = ( props ) => {
	const { attributes } = props;
	const { number } = attributes;

	return (
		<li { ...useBlockProps.save() }>
			<span className="wp-block-yard-timeline-item-line"></span>
			<span className="wp-block-yard-timeline-item-dot">
				{ number ? number : '' }
			</span>
			<div className="wp-block-yard-timeline-item-content">
				<InnerBlocks.Content />
			</div>
		</li>
	);
};

export default Save;
