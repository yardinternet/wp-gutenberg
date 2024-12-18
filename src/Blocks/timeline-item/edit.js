/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';

const Edit = () => {
	const TEMPLATE = applyFilters( 'yard.timeline-item-template', [
		[ 'core/heading', { level: 3, placeholder: 'Koptekst H3' } ],
		[ 'core/paragraph', { placeholder: 'Voeg de inhoud toe' } ],
	] );

	const ALLOWED_BLOCKS = applyFilters( 'yard.timeline-item-allowed-blocks', [
		'core/audio',
		'core/block',
		'core/button',
		'core/buttons',
		'core/cover',
		'core/embed',
		'core/file',
		'core/gallery',
		'core/group',
		'core/heading',
		'core/image',
		'core/list-item',
		'core/list',
		'core/media-text',
		'core/paragraph',
		'core/quote',
		'core/separator',
		'core/table',
		'core/video',
	] );

	return (
		<li { ...useBlockProps() }>
			<span className="wp-block-yard-timeline-item__line"></span>
			<span className="wp-block-yard-timeline-item__dot"></span>
			<div className="wp-block-yard-timeline-item__content">
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
