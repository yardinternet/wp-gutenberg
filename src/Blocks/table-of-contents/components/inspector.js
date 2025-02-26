/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = (props) => {
	const { setAttributes, attributes } = props;
	const { includeSubheading, contentSelector, headingSelector } = attributes;

	return (
		<InspectorControls>
			<PanelBody title={__('Instellingen', 'yard-gutenberg')}>
				<ToggleControl
					label={__('Toon H3 koppen', 'yard-gutenberg')}
					checked={includeSubheading}
					onChange={(value) =>
						setAttributes({ includeSubheading: value })
					}
				/>
			</PanelBody>
			<PanelBody title={__('Voor developers', 'yard-gutenberg')}>
				<p>
					De instellingen worden via het window-object meegegeven. Wil
					je ze deze instantie overschrijven? Doe dat hier.
				</p>
				<TextControl
					label={__('Content selector', 'yard-gutenberg')}
					value={contentSelector}
					onChange={(value) =>
						setAttributes({ contentSelector: value })
					}
				/>
				<TextControl
					label={__('Heading selector', 'yard-gutenberg')}
					value={headingSelector}
					onChange={(value) =>
						setAttributes({ headingSelector: value })
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
