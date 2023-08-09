/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import DisplayDateToggleControl from './display-controls/display-date-toggle-control';
import DisplayExcerptToggleControl from './display-controls/display-excerpt-toggle-control';
import DisplayImageToggleControl from './display-controls/display-image-toggle-control';
import DisplayLabelToggleControl from './display-controls/display-label-toggle-control';
import NumberOfItemsRangeControl from './settings-controls/number-of-items-range-control';
import LabelTypeSelectControl from './display-controls/label-type-select-control';
import OffsetRangeControl from './settings-controls/offset-range-control';
import OrderSelectControl from './settings-controls/order-select-control';
import OrderbySelectControl from './settings-controls/orderby-select-control';
import PosttypeSelectControl from './settings-controls/posttype-select-control';
import TemplateSelectControl from './display-controls/template-select-control';

const Inspector = ( props ) => {
	return (
		<InspectorControls>
			<PanelBody title={ __( 'Instellingen' ) } initialOpen={ true }>
				<PosttypeSelectControl { ...props } />
				<NumberOfItemsRangeControl { ...props } />
				<OffsetRangeControl { ...props } />
				<OrderbySelectControl { ...props } />
				<OrderSelectControl { ...props } />
			</PanelBody>
			<PanelBody title={ __( 'Filters' ) } initialOpen={ false }>
				{ /* Handmatige selectie */ }
				{ /* Posts uitsluiten */ }
				{ /* Klevend bericht */ }
				{ /* Taxonomy filteren */ }
				{ /* Taxonomy uitsluiten */ }
				{ /* Post parent */ }
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
