/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const defaultOrderbyOptions = [
	{ label: __( 'Publicatiedatum' ), value: 'date' },
	{ label: __( 'Titel' ), value: 'title' },
	{ label: __( 'Attribuut volgorde' ), value: 'menu_order' },
	{ label: __( 'Willekeurig' ), value: 'rand' },
];

const tribeEventsDateOption = {
	label: __( 'Event datum' ),
	value: 'event_date',
};

const OrderbySelectControl = ( props ) => {
	const { query, setParameter } = props;
	const [ options, setOptions ] = useState( defaultOrderbyOptions );

	/**
	 * Change options if tribe_events post type is selected
	 */
	useEffect( () => {
		if (
			query.post_type.includes( 'tribe_events' ) &&
			! options.includes( tribeEventsDateOption )
		) {
			setOptions( [ ...options, tribeEventsDateOption ] );
		}

		if (
			! query.post_type.includes( 'tribe_events' ) &&
			options.includes( tribeEventsDateOption )
		) {
			setOptions( defaultOrderbyOptions );
		}
	}, [ query.post_type ] );

	return (
		<SelectControl
			label={ __( 'Sorteer op' ) }
			value={ query.orderby }
			options={ options }
			onChange={ ( value ) => setParameter( 'orderby', value ) }
			__nextHasNoMarginBottom
		/>
	);
};

export default OrderbySelectControl;
