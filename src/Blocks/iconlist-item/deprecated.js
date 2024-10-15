/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default [
	// v0.1.0 - Remove iconColor attribute (and unused linkText attribute)
	{
		attributes: {
			icon: {
				type: 'string',
				default: 'fa-classic fa-light fa-envelope',
			},
			iconAltText: {
				type: 'string',
				default: '',
			},
			iconColor: {
				type: 'string',
			},
			listText: {
				type: 'string',
				default: '',
			},
			linkText: {
				type: 'string',
				default: '',
			},
			linkUrl: {
				type: 'string',
				default: '',
			},
			opensInNewTab: {
				type: 'boolean',
				default: false,
			},
		},
		save: ( props ) => {
			const { attributes } = props;
			const {
				icon,
				iconAltText,
				iconColor,
				listText,
				linkUrl,
				opensInNewTab,
			} = attributes;

			const linkProps = opensInNewTab
				? { target: '_blank', rel: 'noopener noreferrer' }
				: {};

			return (
				<li { ...useBlockProps.save() }>
					<i
						className={ `wp-block-yard-icon-component fa-fw ${ icon } ` }
						title={ iconAltText ? iconAltText : null }
						aria-hidden="true"
						style={ { color: iconColor } }
					></i>

					{ linkUrl ? (
						<a
							href={ linkUrl }
							{ ...linkProps }
							className="wp-block-yard-iconlist-item__link"
						>
							<RichText.Content value={ listText } />
						</a>
					) : (
						<RichText.Content
							className="wp-block-yard-iconlist-item__text"
							tagName="span"
							value={ listText }
						/>
					) }
				</li>
			);
		},
	},
];
