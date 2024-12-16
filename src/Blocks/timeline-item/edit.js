/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';

const Edit = () => {
	const TEMPLATE = applyFilters( 'yard.timeline-item-template', [
		[ 'core/heading', { level: 3, placeholder: 'Koptekst H3' } ],
		[ 'core/paragraph', { placeholder: 'Vul hier de tekst in' } ],
	] );

	const ALLOWED_BLOCKS = applyFilters( 'yard.timeline-item-allowed-blocks', [
		'core/cover',
		'core/heading',
		'core/paragraph',
	] );

	return (
		<li { ...useBlockProps() }>
			<span className="wp-block-yard-timeline-item-line"></span>
			<span className="wp-block-yard-timeline-item-dot"></span>
			<div className="wp-block-yard-timeline-item-content">
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
					templateLock={ false }
				/>
			</div>
		</li>
	);
};

export default Edit;
