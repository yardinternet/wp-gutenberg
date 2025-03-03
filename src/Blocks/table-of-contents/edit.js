/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';

/**
 * Internal dependencies
 */
import Inspector from './components/inspector';
import './editor.scss';

const Edit = ( props ) => {
	return (
		<div { ...useBlockProps() }>
			<Inspector { ...props } />
			<Placeholder
				icon="editor-table"
				label="Inhoudsopgave"
				instructions="De inhoudsopgave wordt dynamisch gevuld met de koppen op de pagina."
			/>
		</div>
	);
};

export default Edit;
