/**
 * External dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	Panel,
	PanelHeader,
} from '@wordpress/components';
import { getBlockTypes } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import useWordpress from './hooks/useWordpress';

const App = () => {
	const { resources } = useWordpress();
	const [ blocks, setBlocks ] = useState( [] );
	const [ data, setData ] = useState( null );

	useEffect( () => {
		async function getData() {
			const posts = await resources.core( 'posts', 'GET' );
			console.log( posts );
			setData( posts );
		}

		getData();
	}, [] );

	useEffect( () => {
		// Get all blocks registered with the namespace yard-gutenberg
		async function getBlocks() {
			const blocks = await getBlockTypes().filter( ( block ) => {
				return block.name.indexOf( 'core' ) !== -1;
			} );
			console.log( blocks );
			setBlocks( blocks );
		}

		getBlocks();
	}, [] );

	return (
		<div className="yard-gutenberg-settings">
			<div className="yard-gutenberg-settings-header">
				<h1>{ __( 'Yard Gutenberg' ) }</h1>
			</div>

			<Panel className="yard-gutenberg-settings-body">
				<PanelBody title={ __( 'Blokinstellingen' ) }>
					<PanelRow>
						<ToggleControl
							label={ __( 'Uitklap' ) }
							help={ '' }
							checked={ true }
							onChange={ () => false }
							help={ __( 'Zet de uitklap aan of uit.' ) }
						/>
					</PanelRow>
				</PanelBody>
			</Panel>
		</div>
	);
};

export default App;
