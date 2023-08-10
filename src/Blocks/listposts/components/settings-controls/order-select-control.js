/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const OrderSelectControl = ( props ) => {
	const { query, setParameter } = props;

	const getHelpText = () => {
		switch ( query.orderby ) {
			case 'date':
			case 'event_date':
				return query.order === 'ASC' ? 'Oud - Nieuw' : 'Nieuw - Oud';
			case 'title':
				return query.order === 'ASC' ? 'A - Z' : 'Z - A';
			case 'menu_order':
				return query.order === 'ASC' ? '1 - 100' : '100 - 1';
			default:
				return '';
		}
	};

	return (
		query.orderby !== 'rand' && (
			<SelectControl
				label={ __( 'Volgorde' ) }
				value={ query.order }
				options={ [
					{ label: __( 'Oplopend' ), value: 'ASC' },
					{ label: __( 'Aflopend' ), value: 'DESC' },
				] }
				help={ getHelpText() }
				onChange={ ( value ) => setParameter( 'order', value ) }
				__nextHasNoMarginBottom
			/>
		)
	);
};

export default OrderSelectControl;
