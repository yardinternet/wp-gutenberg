/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ItemRichText = ( { listText, handleTextChange } ) => {
	return (
		<RichText
			className="wp-block-yard-iconlist-item__text"
			onChange={ handleTextChange }
			placeholder={ __( 'Begin met schrijven', 'yard-gutenberg' ) }
			tagName="span"
			value={ listText }
		/>
	);
};

export default ItemRichText;
