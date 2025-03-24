/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import { Icon } from '@yardinternet/gutenberg-components';

export default [
	// v0.1.0 - Without role="tab" and role="tabpanel"
	{
		attributes: {
			headingLevel: {
				type: 'string',
				default: 'h3',
			},
			headingText: {
				type: 'string',
				default: '',
			},
			icon: {
				type: 'string',
				default: '',
			},
			iconAltText: {
				type: 'string',
				default: '',
			},
			id: {
				type: 'string',
			},
		},
		save: ( props ) => {
			const { attributes } = props;
			const { headingLevel, headingText, icon, id } = attributes;
			const HeadingWithLevel = headingLevel;

			return (
				<>
					<HeadingWithLevel
						{ ...useBlockProps.save( {
							className: 'wp-block-yard-tabs-item__heading',
						} ) }
					>
						<button
							id={ `tabs-item-button-${ id }` }
							className="wp-block-yard-tabs-item__button"
							aria-controls={ `tabs-item-panel-${ id }` }
							aria-selected="false"
						>
							{ icon && <Icon { ...props } /> }
							{ headingText }
						</button>
					</HeadingWithLevel>

					<div
						{ ...useBlockProps.save( {
							className: 'wp-block-yard-tabs-item__panel',
						} ) }
						id={ `tabs-item-panel-${ id }` }
						aria-hidden="true"
						aria-labelledby={ `tabs-item-button-${ id }` }
					>
						<InnerBlocks.Content />
					</div>
				</>
			);
		},
	},
];
