/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Icon from '@components/icon';
import Inspector from './components/inspector';
import './editor.scss';

const Edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const { listText } = attributes;

	return (
		<>
			<Inspector { ...props } />
			<li { ...useBlockProps() }>
				<Icon { ...props } />
				<RichText
					className="wp-block-yard-gutenberg-iconlist-item__text"
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
