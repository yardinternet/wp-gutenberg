/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import DisplayDateToggleControl from './display-controls/display-date-toggle-control';
import DisplayExcerptToggleControl from './display-controls/display-excerpt-toggle-control';
import DisplayImageToggleControl from './display-controls/display-image-toggle-control';
import DisplayLabelToggleControl from './display-controls/display-label-toggle-control';
import LabelTypeSelectControl from './display-controls/label-type-select-control';
import NumberOfItemsRangeControl from './settings-controls/number-of-items-range-control';
import OffsetRangeControl from './settings-controls/offset-range-control';
import OrderSelectControl from './settings-controls/order-select-control';
import OrderbySelectControl from './settings-controls/orderby-select-control';
import PosttypeSelectControl from './settings-controls/posttype-select-control';
import StickyPostComboboxControl from './filters-controls/sticky-post-combobox-control';
import StickyPostToggleControl from './filters-controls/sticky-post-toggle-control';
import TemplateSelectControl from './display-controls/template-select-control';
import useQueryReducer from '../hooks/useQueryReducer';

const Inspector = ( props ) => {
	const { setAttributes, attributes } = props;
	const { query } = attributes;
	const { queryState, setParameter } = useQueryReducer( query );

	useEffect( () => {
		setAttributes( { query: queryState } );
	}, [ JSON.stringify( queryState ) ] );

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Instellingen' ) } initialOpen={ true }>
				<PosttypeSelectControl
					query={ queryState }
					setParameter={ setParameter }
				/>
				<NumberOfItemsRangeControl
					query={ queryState }
					setParameter={ setParameter }
				/>
				<OffsetRangeControl
					query={ queryState }
					setParameter={ setParameter }
				/>
				<OrderbySelectControl
					query={ queryState }
					setParameter={ setParameter }
				/>
				<OrderSelectControl
					query={ queryState }
					setParameter={ setParameter }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Filters' ) } initialOpen={ false }>
				{ /* Handmatige selectie */ }
				{ /* Posts uitsluiten */ }
				{ /* Taxonomy filteren */ }
				{ /* Taxonomy uitsluiten */ }
				{ /* Post parent */ }
				<StickyPostToggleControl
					setParameter={ setParameter }
					{ ...props }
				/>
				<StickyPostComboboxControl
					query={ queryState }
					setParameter={ setParameter }
					{ ...props }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Weergave' ) } initialOpen={ false }>
				<TemplateSelectControl { ...props } />
				<DisplayImageToggleControl { ...props } />
				<DisplayDateToggleControl { ...props } />
				<DisplayExcerptToggleControl { ...props } />
				<DisplayLabelToggleControl { ...props } />
				<LabelTypeSelectControl { ...props } />
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
