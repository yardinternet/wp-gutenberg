/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Edit = () => {
	return (
		<div { ...useBlockProps() }>
			<div className="wp-block-yard-timeline-progress-line"></div>
			<div className="wp-block-yard-timeline-content">
				<InnerBlocks
					allowedBlocks={ [ 'yard/timeline-item' ] }
					template={ [ [ 'yard/timeline-item' ] ] }
				/>
			</div>
		</div>
	);
};

export default Edit;
