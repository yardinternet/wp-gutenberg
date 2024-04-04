/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

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
import './editor.scss';

const Edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const { icon, listText } = attributes;

	return (
		<>
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
			<li { ...useBlockProps() }>
				<Icon { ...props } />
				<RichText
					className="wp-block-yard-iconlist-item__text"
					onChange={ ( value ) =>
						setAttributes( { listText: value } )
					}
					placeholder={ __( 'Begin met schrijven' ) }
					tagName="span"
					value={ listText }
				/>
			</li>
		</>
	);
};

export default Edit;
