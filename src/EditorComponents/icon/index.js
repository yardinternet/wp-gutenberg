/**
 * Internal dependencies
 */
import './style.scss';

const Icon = ( props ) => {
	const { attributes } = props;
	const { icon, iconAltText } = attributes;

	return (
		<>
			<i
				className={ `wp-block-yard-icon-component ${ icon } ` }
				title={ iconAltText ? iconAltText : null }
			></i>
			{ iconAltText && (
				<span class="wp-block-yard-icon-component__sr-only">
					{ iconAltText }
				</span>
			) }
		</>
	);
};

export default Icon;
