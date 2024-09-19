/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

export default [
	// v0.0.1 - Without data-number attribute.
	{
		attributes: {
			number: {
				type: 'string',
				default: '100',
			},
			numberPrefix: {
				type: 'string',
			},
			numberSuffix: {
				type: 'string',
			},
			hasThousandsSeparator: {
				type: 'boolean',
				default: false,
			},
			animationDuration: {
				type: 'number',
				default: 2.5,
			},
		},
		save: ( props ) => {
			const { attributes } = props;
			const {
				hasThousandsSeparator,
				animationDuration,
				number,
				numberPrefix,
				numberSuffix,
			} = attributes;

			return (
				<div
					{ ...useBlockProps.save() }
					data-hasthousandsseparator={ hasThousandsSeparator }
					data-animationduration={ animationDuration }
				>
					{ numberPrefix && (
						<span className="wp-block-yard-counting-number__prefix">
							{ numberPrefix }
						</span>
					) }
					<span className="wp-block-yard-counting-number__number">
						{ number.replace( /\./g, ',' ) }
					</span>
					{ numberSuffix && (
						<span className="wp-block-yard-counting-number__suffix">
							{ numberSuffix }
						</span>
					) }
				</div>
			);
		},
	},
];
