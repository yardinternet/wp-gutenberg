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
	const { hasThousandsSeparator, animationDuration } = attributes;

	return (
		<div
			{ ...useBlockProps.save() }
			data-hasthousandsseparator={ hasThousandsSeparator }
			data-animationduration={ animationDuration }
		>
			<Number { ...props } />
		</div>
	);
};

export default Save;
