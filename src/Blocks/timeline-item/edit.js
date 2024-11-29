/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Edit = () => {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				template={ [
					[
						'core/heading',
						{ level: 3, placeholder: 'Koptekst H3' },
					],
					[
						'core/paragraph',
						{ placeholder: 'Vul hier de tekst in' },
					],
				] }
			/>
		</div>
	);
};

export default Edit;
