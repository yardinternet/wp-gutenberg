/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ManualSelectionToggleControl = ( props ) => {
	const { setParameter, removeParameter, setAttributes, attributes } = props;
	const { enableManualSelection } = attributes;

	/**
	 * Save state in attributes and remove parameters if the toggle is enabled
	 *
	 * @todo More parameters need to be removed
	 *
	 * @param {boolean} state - State of toggle
	 */
	const onChange = ( state ) => {
		setAttributes( { enableManualSelection: state } );

		if ( state ) {
			setAttributes( {
				enableStickyPost: false,
				enableExcludePosts: false,
				enablePostParent: false,
			} );
			setParameter( 'post__in', [] );
			removeParameter( 'post_parent' );
			removeParameter( 'tax_query' );
		}
	};

	return (
		<ToggleControl
			label={ __( 'Handmatige selectie' ) }
			checked={ enableManualSelection }
			onChange={ onChange }
		/>
	);
};

export default ManualSelectionToggleControl;
