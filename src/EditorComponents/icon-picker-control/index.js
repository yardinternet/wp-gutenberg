/**
 * WordPress dependencies
 */
import { Button, Popover, SearchControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import './editor.scss';

const IconPickerControl = ( { onChange, icon } ) => {
	const [ isOpen, setOpen ] = useState( false );
	const [ searchInput, setSearchInput ] = useState( '' );
	const [ searchResults, setSearchResults ] = useState( [] );

	const { createNotice } = useDispatch( noticesStore );

	const allowedFamilyStyles = applyFilters(
		'yard-gutenberg.fontawesome-family-styles',
		[
			{ family: 'classic', style: 'solid' },
			{ family: 'classic', style: 'regular' },
			{ family: 'classic', style: 'light' },
			{ family: 'classic', style: 'thin' },
			{ family: 'classic', style: 'brands' },
			{ family: 'duotone', style: 'solid' },
			{ family: 'sharp', style: 'solid' },
			{ family: 'sharp', style: 'regular' },
			{ family: 'sharp', style: 'light' },
		]
	);

	const searchFontAwesomeIcons = async ( searchValue ) => {
		const response = await getFontAwesomeIcons( searchValue );
		if ( ! response ) return;
		if ( response.errors ) return showErrorNotice();

		const result = response.data.search.reduce(
			( iconResults, iconData ) => {
				convertResponseToClassnames( iconData ).forEach( ( value ) => {
					iconResults.push( value );
				} );

				return iconResults;
			},
			[]
		);
		if ( ! result ) return;

		setSearchResults( () => result );
		setOpen( () => true );
	};

	/**
	 * Use FontAwesome API to search for icons
	 *
	 * @see https://fontawesome.com/docs/apis/graphql/objects#icon
	 * @see https://fontawesome.com/docs/apis/graphql/objects#familystylesbylicense
	 * @see https://fontawesome.com/docs/apis/graphql/objects#familystyle
	 */
	const getFontAwesomeIcons = ( search ) => {
		const query = `{ search(version: "6.4.0", first: 100, query: "${ search }")
			{
				id
				familyStylesByLicense {
					free {
						family
						style
					}
					pro {
						family
						style
					}
				}
			}
		}`;

		return fetch( 'https://api.fontawesome.com', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify( { query } ),
		} )
			.then( ( res ) => res.json() )
			.catch( () => showErrorNotice() );
	};

	// Create a classname based on the response with only the allowed familyStyles
	const convertResponseToClassnames = ( response ) => {
		const allFamilyStyles = getAllFamilyStyles( response );

		return allFamilyStyles
			.filter( ( familyStyle ) => checkIfStyleIsAllowed( familyStyle ) )
			.map(
				( familyStyle ) =>
					`fa-${ familyStyle.family } fa-${ familyStyle.style } fa-${ response.id }`
			);
	};

	// Returns one array with free and pro familyStyles
	const getAllFamilyStyles = ( response ) => {
		const freeFamilyStyles = response.familyStylesByLicense.free;
		const proFamilyStyles = response.familyStylesByLicense.pro;
		const allFamilyStyles = freeFamilyStyles.concat( proFamilyStyles );

		// Remove duplicated familyStyles
		return allFamilyStyles.filter(
			( obj, index ) =>
				allFamilyStyles.findIndex(
					( item ) =>
						item.family === obj.family && item.style === obj.style
				) === index
		);
	};

	// Check if the current familyStyle exist in allowedFamilyStyles
	const checkIfStyleIsAllowed = ( familyStyle ) => {
		return allowedFamilyStyles.some(
			( obj ) =>
				obj.family === familyStyle.family &&
				obj.style === familyStyle.style
		);
	};

	const showErrorNotice = () => {
		createNotice(
			'error',
			__(
				'Momenteel kunnen er geen iconen worden opgehaald, probeer het later nog een keer.'
			),
			{
				isDismissible: true,
				type: 'snackbar',
				id: 'icon-picker-control-error',
			}
		);
	};

	return (
		<>
			{ icon && (
				<i className={ icon + ' icon-picker-control-preview-icon' }></i>
			) }
			<SearchControl
				placeholder={ __( 'Zoek een icoon' ) }
				value={ searchInput }
				help={ __( 'Gebruik Engelse termen om een icoon te zoeken.' ) }
				onChange={ ( searchValue ) => {
					setSearchInput( () => searchValue );
					searchFontAwesomeIcons( searchValue );
				} }
			/>
			{ isOpen && searchInput && (
				<Popover
					title={ __( 'Kies een icoon' ) }
					onClose={ () => setOpen( () => false ) }
					focusOnMount={ false }
				>
					<div className="icon-picker-control-popover-container">
						{ searchResults?.map( ( result, key ) => {
							return (
								<div
									className="icon-picker-control-popover-btn-container"
									key={ key }
								>
									<Button
										onClick={ () => {
											onChange( result );
											setSearchInput( () => '' );
											setOpen( () => false );
										} }
									>
										<i className={ result }></i>
									</Button>
								</div>
							);
						} ) }

						{ ! searchResults.length && (
							<p>{ __( 'Er zijn geen iconen gevonden' ) }</p>
						) }
					</div>
				</Popover>
			) }
		</>
	);
};

export default IconPickerControl;
