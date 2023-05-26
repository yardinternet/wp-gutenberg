/**
 * External dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import useWordpress from './hooks/useWordpress';

const App = () => {
	const { resources } = useWordpress();

	const [ data, setData ] = useState( null );

	useEffect( () => {
		async function getData() {
			const posts = await resources.core( 'posts', 'GET' );
			console.log( posts );
			setData( posts );
		}

		getData();
	}, [] );

	return (
		<>
			<div className="yard-gutenberg-settings-header">
				<h1>{ __( 'Yard Gutenberg' ) }</h1>
			</div>
			{ /* <PanelBody title={ __( 'Blokinstellingen' ) }>
				<PanelRow>
					<ToggleControl
						label={ __( 'Uitklap' ) }
						help={
							''
						}
						checked={ true }
						onChange={ () => false }
					/>
				</PanelRow>
			</PanelBody> */ }
		</>
	);
};

export default App;
