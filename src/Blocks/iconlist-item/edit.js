/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

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
import ItemLink from './components/link';
import ItemRichtext from './components/rich-text';
import './editor.scss';

const Edit = ( props ) => {
	const { attributes, setAttributes, context } = props;
	const { icon, listText, linkUrl, opensInNewTab } = attributes;

	const useLinkComponent = context[ 'yard/iconlist-use-link-component' ];

	const handleTextChange = ( value ) => {
		setAttributes( { listText: value } );
	};

	const handleLinkChange = ( value ) => {
		setAttributes( {
			linkUrl: value?.url,
			opensInNewTab: value?.opensInNewTab,
			listText: value?.title ?? listText,
		} );
	};

	const handleLinkRemove = () => {
		setAttributes( {
			linkUrl: null,
			opensInNewTab: null,
		} );
	};

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
				{ useLinkComponent ? (
					<ItemLink
						handleLinkChange={ handleLinkChange }
						handleLinkRemove={ handleLinkRemove }
						handleTextChange={ handleTextChange }
						linkUrl={ linkUrl }
						listText={ listText }
						opensInNewTab={ opensInNewTab }
					/>
				) : (
					<ItemRichtext
						listText={ listText }
						handleTextChange={ handleTextChange }
					/>
				) }
			</li>
		</>
	);
};

export default Edit;
