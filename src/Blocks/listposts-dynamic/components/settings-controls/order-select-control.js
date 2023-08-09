/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const OrderSelectControl = ( props ) => {
	const { setAttributes, attributes } = props;
	const { order, orderby } = attributes;

	return (
		orderby !== 'rand' && (
			<SelectControl
				label={ __( 'Volgorde' ) }
				value={ order }
				options={ [
					{ label: __( 'Oplopend' ), value: 'ASC' },
					{ label: __( 'Aflopend' ), value: 'DESC' },
				] }
				help={
					orderby === 'date' || orderby === 'event_date'
						? order === 'ASC'
							? 'Oud - Nieuw'
							: 'Nieuw - Oud'
						: orderby === 'title'
						? order === 'ASC'
							? 'A - Z'
							: 'Z - A'
						: ''
				}
				onChange={ ( value ) => setAttributes( { order: value } ) }
				__nextHasNoMarginBottom
			/>
		)
	);
};

export default OrderSelectControl;
