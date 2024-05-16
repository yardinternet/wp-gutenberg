/**
 * WordPress dependencies
 */
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import {
	Button,
	PanelBody,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls } from '@wordpress/block-editor';

/**
 * Synchronized patterns are registered under the name 'core/block'. This filter adds buttons
 * that link to the pattern admin pages.
 */
const AddLinkToSynchedPatternInspectorControls = createHigherOrderComponent(
	( BlockEdit ) => {
		return ( props ) => {
			const { name, attributes } = props;
			const { ref } = attributes;
			const editUrl = `/wp/wp-admin/post.php?post=${ ref }&action=edit`;
			const isSyncedPattern = name === 'core/block';

			return (
				<>
					<BlockEdit { ...props } />
					{ isSyncedPattern && (
						<>
							<BlockControls>
								<ToolbarGroup>
									<ToolbarButton
										icon={ 'edit' }
										label={ __(
											'Patroon bewerken',
											'yard-gutenberg'
										) }
										onClick={ () =>
											( window.location.href = editUrl )
										}
									/>
								</ToolbarGroup>
							</BlockControls>
							<InspectorControls>
								<PanelBody
									title={ __( 'Beheer', 'yard-gutenberg' ) }
									initialOpen={ true }
								>
									<Button
										href={ editUrl }
										variant="secondary"
									>
										{ __(
											'Patroon bewerken',
											'yard-gutenberg'
										) }
									</Button>
									<Button
										href="/wp/wp-admin/edit.php?post_type=wp_block"
										variant="default"
										style={ {
											marginLeft: '7px',
										} }
									>
										{ __(
											'Alle patronen',
											'yard-gutenberg'
										) }
									</Button>
								</PanelBody>
							</InspectorControls>
						</>
					) }
				</>
			);
		};
	},
	'AddLinkToSynchedPatternInspectorControls'
);

addFilter(
	'editor.BlockEdit',
	'yard/add-link-to-wp-block',
	AddLinkToSynchedPatternInspectorControls
);
