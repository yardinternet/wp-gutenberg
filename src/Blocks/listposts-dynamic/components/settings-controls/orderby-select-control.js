/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const defaultOrderByOptions = [
	{ label: __( 'Publicatiedatum' ), value: 'date' },
	{ label: __( 'Titel' ), value: 'title' },
	{ label: __( 'Willekeurig' ), value: 'rand' },
];

const tribeEventsDateOption = {
	label: __( 'Event datum' ),
	value: 'event_date',
};

const OrderbySelectControl = ( props ) => {
	const { setAttributes, attributes } = props;
	const { posttypes, orderby } = attributes;
	const [ options, setOptions ] = useState( defaultOrderByOptions );

	useEffect( () => {
		if (
			posttypes.includes( 'tribe_events' ) &&
			! options.includes( tribeEventsDateOption )
		) {
			setOptions( [ ...options, tribeEventsDateOption ] );
		}

		if (
			! posttypes.includes( 'tribe_events' ) &&
			options.includes( tribeEventsDateOption )
		) {
			setOptions( defaultOrderByOptions );
		}
	}, [ posttypes ] );

	return (
		<SelectControl
			label={ __( 'Sorteer op' ) }
			value={ orderby }
			options={ options }
			onChange={ ( value ) => setAttributes( { orderby: value } ) }
			__nextHasNoMarginBottom
		/>
	);
};

export default OrderbySelectControl;
