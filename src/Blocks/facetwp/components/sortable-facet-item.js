/**
 * External dependencies
 */
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { dragHandle, close } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

const SortableFacetItem = ( { facet, onRemove } ) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable( { id: facet.value } );

	const style = {
		transform: CSS.Transform.toString( transform ),
		transition,
		opacity: isDragging ? 0.5 : 1,
	};

	return (
		<div
			ref={ setNodeRef }
			style={ style }
			className="wp-block-yard-facetwp-inspector-item"
		>
			<Button
				icon={ dragHandle }
				label={ __( 'Versleep', 'yard-gutenberg' ) }
				className="wp-block-yard-facetwp-inspector-item__handle"
				{ ...attributes }
				{ ...listeners }
			/>
			<span className="wp-block-yard-facetwp-inspector-item__label">
				{ facet.label } <em>({ facet.name })</em>
			</span>
			<Button
				icon={ close }
				label={ __( 'Verwijder', 'yard-gutenberg' ) }
				className="wp-block-yard-facetwp-inspector-item__remove"
				onClick={ () => onRemove( facet.value ) }
			/>
		</div>
	);
};

export default SortableFacetItem;
