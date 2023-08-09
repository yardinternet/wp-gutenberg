/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const StickyPostToggleControl = ( props ) => {
	const { setParameter, setAttributes, attributes } = props;
	const { hasStickyPost } = attributes;

	const onChange = ( state ) => {
		setAttributes( { hasStickyPost: state } );

		if ( ! state ) {
			setParameter( 'post__in', '' );
		}
	};

	return (
		<ToggleControl
			label={ __( 'Klevend bericht' ) }
			checked={ hasStickyPost }
			onChange={ onChange }
			__nextHasNoMarginBottom
		/>
	);
};

export default StickyPostToggleControl;
