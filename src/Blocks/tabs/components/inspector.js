/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const { clientId, setAttributes, attributes } = props;
	const { headingLevel } = attributes;

	const { getBlocksByClientId } = useSelect( ( select ) => ( {
		/**
		 * Get current block by client id
		 *
		 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#getblocksbyclientid
		 */
		getBlocksByClientId:
			select( 'core/block-editor' ).getBlocksByClientId( clientId ),
	} ) );

	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );

	/**
	 * Handles the change event for heading level.
	 *
	 * @param {string} value - The new value for heading level.
	 */
	const onChangeHeadingLevel = ( value ) => {
		setAttributes( { headingLevel: value } );

		if ( getBlocksByClientId.length > 0 ) {
			const children = getBlocksByClientId[ 0 ].innerBlocks;

			children.forEach( ( child ) =>
				updateBlockAttributes( child.clientId, { headingLevel: value } )
			);
		}
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Instellingen' ) }>
				{ /* TODO: Add toggle control for defaultTab */ }
				{ /* TODO: Add select control to select the defaultTab */ }
			</PanelBody>
			<PanelBody title={ __( 'Toegankelijkheid' ) }>
				<SelectControl
					label={ __( 'Koptekst' ) }
					value={ headingLevel }
					options={ [
						{ label: 'Geen', value: 'div' },
						{ label: 'H2', value: 'h2' },
						{ label: 'H3', value: 'h3' },
						{ label: 'H4', value: 'h4' },
						{ label: 'H5', value: 'h5' },
						{ label: 'H6', value: 'h6' },
					] }
					onChange={ onChangeHeadingLevel }
					help={ __(
						'Selecteer het koptekst niveau voor de titels van de tab items.'
					) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
