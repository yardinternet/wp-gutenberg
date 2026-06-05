/**
 * External dependencies
 */
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
	arrayMove,
} from '@dnd-kit/sortable';

/**
 * WordPress dependencies
 */
import { SelectControl, ComboboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import SortableFacetItem from './sortable-facet-item';

const Settings = ( props ) => {
	const { setAttributes, attributes } = props;
	const { selectedFacets, selectedTemplate } = attributes;
	const [ facetSearch, setFacetSearch ] = useState( null );

	const allTemplates = window.facetWP.templates;
	const allFacets = window.facetWP.facets;

	const templateOptions = [
		{ value: '', label: __( '— Selecteer template —', 'yard-gutenberg' ) },
		...allTemplates.map( ( t ) => ( { value: t.name, label: t.label } ) ),
	];

	const selectedFacetValues = ( selectedFacets || [] ).map(
		( f ) => f.value ?? f.name
	);

	const availableFacets = allFacets
		.filter( ( f ) => ! selectedFacetValues.includes( f.name ) )
		.map( ( f ) => ( {
			value: f.name,
			label: `${ f.label } (${ f.name })`,
		} ) );

	const sensors = useSensors(
		useSensor( PointerSensor ),
		useSensor( KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		} )
	);

	const onTemplateChange = ( name ) => {
		const found = allTemplates.find( ( t ) => t.name === name );
		setAttributes( { selectedTemplate: found ?? {} } );
	};

	const onAddFacet = ( name ) => {
		if ( ! name ) return;
		const found = allFacets.find( ( f ) => f.name === name );
		if ( ! found ) return;
		const facetWithValue = { ...found, value: found.name };
		setAttributes( {
			selectedFacets: [ ...( selectedFacets || [] ), facetWithValue ],
		} );
		setFacetSearch( null );
	};

	const onRemoveFacet = ( value ) => {
		setAttributes( {
			selectedFacets: ( selectedFacets || [] ).filter(
				( f ) => ( f.value ?? f.name ) !== value
			),
		} );
	};

	const onDragEnd = ( { active, over } ) => {
		if ( ! over || active.id === over.id ) return;
		const items = selectedFacets || [];
		const oldIndex = items.findIndex(
			( f ) => ( f.value ?? f.name ) === active.id
		);
		const newIndex = items.findIndex(
			( f ) => ( f.value ?? f.name ) === over.id
		);
		setAttributes( {
			selectedFacets: arrayMove( items, oldIndex, newIndex ),
		} );
	};

	return (
		<>
			<SelectControl
				label={ __( 'Selecteer het template', 'yard-gutenberg' ) }
				value={ selectedTemplate?.name ?? '' }
				options={ templateOptions }
				onChange={ onTemplateChange }
			/>

			<ComboboxControl
				label={ __( 'Voeg filters toe', 'yard-gutenberg' ) }
				value={ facetSearch }
				options={ availableFacets }
				onChange={ onAddFacet }
				onFilterValueChange={ setFacetSearch }
			/>

			{ ( selectedFacets || [] ).length > 0 && (
				<DndContext
					sensors={ sensors }
					collisionDetection={ closestCenter }
					onDragEnd={ onDragEnd }
				>
					<SortableContext
						items={ selectedFacetValues }
						strategy={ verticalListSortingStrategy }
					>
						<div className="wp-block-yard-facetwp-inspector-list">
							{ ( selectedFacets || [] ).map( ( facet ) => (
								<SortableFacetItem
									key={ facet.value ?? facet.name }
									facet={ {
										...facet,
										value: facet.value ?? facet.name,
									} }
									onRemove={ onRemoveFacet }
								/>
							) ) }
						</div>
					</SortableContext>
				</DndContext>
			) }
		</>
	);
};

export default Settings;
