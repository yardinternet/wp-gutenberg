/**
 * WordPress dependencies
 */
import { BlockControls } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

/**
 * Add remove image toggle and to the block toolbar.
 *
 * @param {Function} BlockEdit - Original component.
 */
const addRemoveImageControl = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		if ( props.name !== 'core/media-text' ) {
			return <BlockEdit { ...props } />;
		}

		const { attributes, setAttributes } = props;
		const { mediaId } = attributes;

		const hasImage = !! mediaId;

		return (
			<>
				<BlockControls>
					{ hasImage && (
						<ToolbarGroup>
							<ToolbarButton
								title="Media verwijderen"
								onClick={ () =>
									setAttributes( {
										mediaId: undefined,
										mediaLink: undefined,
										mediaType: undefined,
										mediaUrl: undefined,
									} )
								}
							>
								Media verwijderen
							</ToolbarButton>
						</ToolbarGroup>
					) }
				</BlockControls>
				<BlockEdit { ...props } />
			</>
		);
	};
} );

addFilter(
	'editor.BlockEdit',
	'theme/heading-exclude-from-toc',
	addRemoveImageControl
);
