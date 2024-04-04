/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import {
	Icon,
	IconPickerControlToolbar,
} from '@yardinternet/gutenberg-components';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';

const Edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const { icon } = attributes;

	return (
		<div { ...useBlockProps() }>
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
			<Inspector { ...props } />
			{ icon && <Icon { ...props } /> }
		</div>
	);
};

export default Edit;
