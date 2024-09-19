/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Number from './components/number';

const Save = ( props ) => {
	const { attributes } = props;
	const { hasThousandsSeparator, animationDuration, number } = attributes;

	return (
		<div
			{ ...useBlockProps.save() }
			data-hasthousandsseparator={ hasThousandsSeparator }
			data-animationduration={ animationDuration }
			data-number={ number?.replace( /\./g, ',' ) }
		>
			<Number { ...props } />
		</div>
	);
};

export default Save;
