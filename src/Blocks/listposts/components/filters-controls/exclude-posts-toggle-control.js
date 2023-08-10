/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ExcludePostsToggleControl = ( props ) => {
	const { setAttributes, attributes } = props;
	const { enableExcludePosts, enableManuelSelection } = attributes;

	return (
		! enableManuelSelection && (
			<ToggleControl
				label={ __( 'Items uitsluiten' ) }
				checked={ enableExcludePosts }
				onChange={ ( state ) =>
					setAttributes( { enableExcludePosts: state } )
				}
			/>
		)
	);
};

export default ExcludePostsToggleControl;
