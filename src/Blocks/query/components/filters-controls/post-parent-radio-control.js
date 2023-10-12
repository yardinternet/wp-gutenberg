/**
 * WordPress dependencies
 */
import { RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const PostParentRadioControl = ( props ) => {
	const { setParameter, removeParameter, setAttributes, attributes } = props;
	const { postParentOption, enableManualSelection, enablePostParent } =
		attributes;

	/**
	 * Save option in attributes and set/remove post_parent query parameter
	 *
	 * @param {string} value - Selected option
	 */
	const onChange = ( value ) => {
		setAttributes( { postParentOption: value } );

		if ( value === 'only-parents' ) {
			setParameter( 'post_parent', 0 );
		} else {
			removeParameter( 'post_parent' );
		}
	};

	return (
		! enableManualSelection &&
		enablePostParent && (
			<RadioControl
				label={ __( 'Hoofd- en subberichten' ) }
				hideLabelFromVision={ true }
				selected={ postParentOption }
				options={ [
					{
						label: __( 'Toon alleen hoofdberichten' ),
						value: 'only-parents',
					},
					{
						label: __(
							'Toon subberichten van een specifieke hoofdbericht'
						),
						value: 'specific-parent',
					},
				] }
				onChange={ onChange }
			/>
		)
	);
};

export default PostParentRadioControl;
