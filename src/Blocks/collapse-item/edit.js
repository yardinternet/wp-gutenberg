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

			<div { ...useBlockProps() } data-open={ isOpen }>
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
						aria-label="Toggle uitklap"
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
