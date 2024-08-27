/**
 * External dependencies
 */
import { Link } from '@yardinternet/gutenberg-components';
import { __ } from '@wordpress/i18n';

const ItemLink = ( {
	linkUrl,
	listText,
	opensInNewTab,
	handleLinkChange,
	handleLinkRemove,
	handleTextChange,
} ) => {
	return (
		<Link
			className="wp-block-yard-iconlist-item__link"
			link={ {
				url: linkUrl,
				title: listText,
				opensInNewTab,
			} }
			onLinkChange={ handleLinkChange }
			onLinkRemove={ handleLinkRemove }
			onTextChange={ handleTextChange }
			placeholder={ __( 'Begin met schrijven', 'yard-gutenberg' ) }
		/>
	);
};

export default ItemLink;
