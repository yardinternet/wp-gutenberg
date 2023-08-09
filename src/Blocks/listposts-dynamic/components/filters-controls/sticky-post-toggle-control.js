/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const StickyPostToggleControl = ( props ) => {
	const { removeParameter, setAttributes, attributes } = props;
	const { hasStickyPost } = attributes;

	/**
	 * Save state in attributes and remove post__in parament if the toggle is disabled
	 *
	 * @param {boolean} state - State of toggle
	 */
	const onChange = ( state ) => {
		setAttributes( { hasStickyPost: state } );

		if ( ! state ) {
			removeParameter( 'post__in' );
		}
	};

	return (
		<ToggleControl
			label={ __( 'Klevend item' ) }
			checked={ hasStickyPost }
			onChange={ onChange }
		/>
	);
};

export default StickyPostToggleControl;
