/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

const Edit = ( props ) => {
	const { clientId, context, attributes, setAttributes } = props;
	const { number } = attributes;

	const TEMPLATE = applyFilters( 'yard.timeline-item-template', [
		[ 'core/heading', { level: 3, placeholder: 'Koptekst H3' } ],
		[ 'core/paragraph', { placeholder: 'Vul hier de tekst in' } ],
	] );
	const ALLOWED_BLOCKS = applyFilters( 'yard.timeline-item-allowed-blocks', [
		'core/cover',
		'core/heading',
		'core/paragraph',
	] );

	const isOrderedList = context[ 'yard/timeline-is-ordered-list' ];

	const { index } = useSelect( ( select ) => ( {
		index: select( 'core/block-editor' ).getBlockIndex( clientId ),
	} ) );

	useEffect( () => {
		if ( isOrderedList ) {
			setAttributes( { number: index + 1 } );
		}
	}, [ setAttributes, isOrderedList, index ] );

	return (
		<li { ...useBlockProps() }>
			<span className="wp-block-yard-timeline-item-line"></span>
			<span className="wp-block-yard-timeline-item-dot">
				{ number ? number : '' }
			</span>
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
