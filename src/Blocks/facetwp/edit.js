/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import icon from './icon';
import metadata from './block.json';
import './editor.scss';

const Edit = ( props ) => {
	return (
		<>
			<Inspector { ...props } />

			<div { ...useBlockProps() }>
				<Placeholder
					icon={ icon.src }
					label={ metadata.title }
					instructions={ __(
						'Plaats filtering op de pagina. Configureer het template en de filters bij de blokinstellingen in het rechterpaneel.',
						'yard-gutenberg'
					) }
				/>
			</div>
		</>
	);
};

export default Edit;
