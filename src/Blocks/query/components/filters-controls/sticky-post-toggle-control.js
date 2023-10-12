/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const StickyPostToggleControl = ( props ) => {
	const { setParameter, setAttributes, attributes } = props;
	const { enableStickyPost, enableManualSelection } = attributes;

	/**
	 * Save state in attributes and remove post__in parameter if the toggle is disabled
	 *
	 * @param {boolean} state - State of toggle
	 */
	const onChange = ( state ) => {
		setAttributes( { enableStickyPost: state } );

		if ( ! state ) {
			setParameter( 'post__in', [] );
		}
	};

	return (
		! enableManualSelection && (
			<ToggleControl
				label={ __( 'Klevend bericht' ) }
				checked={ enableStickyPost }
				onChange={ onChange }
			/>
		)
	);
};

export default StickyPostToggleControl;
