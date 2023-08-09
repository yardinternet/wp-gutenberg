/**
 * WordPress dependencies
 */
import { RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const PostParentRadioControl = ( props ) => {
	const { setParameter, removeParameter, setAttributes, attributes } = props;
	const { postParentOption } = attributes;

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
		<RadioControl
			label={ __( 'Hoofd- en subitems' ) }
			selected={ postParentOption }
			options={ [
				{ label: __( 'Toon zowel hoofd- als subitems' ), value: 'any' },
				{
					label: __( 'Toon alleen hoofditems' ),
					value: 'only-parents',
				},
				{
					label: __( 'Toon subitems van een specifieke hoofditem' ),
					value: 'specific-parent',
				},
			] }
			onChange={ onChange }
		/>
	);
};

export default PostParentRadioControl;
