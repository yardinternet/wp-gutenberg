/**
 * WordPress dependencies
 */
import { useBlockProps, PlainText, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Inspector from './components/Inspector';
import './editor.scss';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const { headingText } = attributes;

	const TEMPLATE = [
		[
			'core/paragraph',
			{
				placeholder: 'Vul hier de uitklap content in',
			},
		],
	];

	const [ isOpen, setIsOpen ] = useState( false );

	return (
		<>
			<Inspector { ...props } />

			<div { ...useBlockProps() }>
				<div className="wp-block-yard-gutenberg-collapse-item__header">
					<PlainText
						className="wp-block-yard-gutenberg-collapse-item__header-input"
						onChange={ ( value ) =>
							setAttributes( { headingText: value } )
						}
						value={ headingText }
					/>
					<Button
						className="wp-block-yard-gutenberg-collapse-item__header-toggle-button"
						onClick={ () => setIsOpen( ( current ) => ! current ) }
						variant="primary"
					>
						Open/sluit
					</Button>
				</div>
				<div
					className="wp-block-yard-gutenberg-collapse-item__panel"
					style={ { display: `${ isOpen ? 'block' : 'none' }` } }
				>
					<div className="wp-block-yard-gutenberg-collapse-item__panel-content">
						<InnerBlocks template={ TEMPLATE } />
					</div>
				</div>
			</div>
		</>
	);
};

export default edit;
