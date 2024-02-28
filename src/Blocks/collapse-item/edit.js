/**
 * WordPress dependencies
 */
import { useBlockProps, PlainText, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { IconPickerControlToolbar } from '@components/icon-picker-control';
import Icon from '@components/icon';
import { useParentBlock } from '@hooks';
import Inspector from './components/inspector';
import './editor.scss';

const TEMPLATE = [
	[
		'core/paragraph',
		{
			placeholder: __( 'Vul hier de uitklap inhoud in' ),
		},
	],
];

const Edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const { headingText, icon } = attributes;

	const enableIcon = applyFilters( 'yard.collapse-item-enable-icon', false );

	const [ isOpen, setIsOpen ] = useState( false );

	const { parentAttributes } = useParentBlock();

	useEffect( () => {
		setAttributes( {
			headingLevel: parentAttributes.headingLevel ?? 'h3',
		} );
	}, [ setAttributes, parentAttributes.headingLevel ] );

	useEffect( () => {
		if ( ! enableIcon ) {
			setAttributes( { icon: '', iconAltText: '' } );
		}
	}, [ setAttributes, enableIcon ] );

	return (
		<>
			{ enableIcon && (
				<IconPickerControlToolbar
					icon={ icon }
					onChange={ ( result ) => {
						if ( result !== undefined ) {
							setAttributes( {
								icon: result,
							} );
						}
					} }
				/>
			) }

			<Inspector { ...props } enableIcon={ enableIcon } />

			<div { ...useBlockProps() } data-open={ isOpen }>
				<div className="wp-block-yard-collapse-item__header">
					{ icon && <Icon { ...props } /> }
					<PlainText
						className="wp-block-yard-collapse-item__header-input"
						onChange={ ( value ) =>
							setAttributes( { headingText: value } )
						}
						value={ headingText }
					/>
					<Button
						className="wp-block-yard-collapse-item__header-toggle-button"
						onClick={ () => setIsOpen( ( current ) => ! current ) }
						variant="primary"
						aria-label={ __( 'Toggle uitklap' ) }
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z" />
						</svg>
					</Button>
				</div>
				<div
					className="wp-block-yard-collapse-item__panel"
					style={ { display: `${ isOpen ? 'block' : 'none' }` } }
				>
					<div className="wp-block-yard-collapse-item__panel-content">
						<InnerBlocks template={ TEMPLATE } />
					</div>
				</div>
			</div>
		</>
	);
};

export default Edit;
