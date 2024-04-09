/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * External dependencies
 */
import { useCurrentBlock } from '@yardinternet/gutenberg-hooks';

/**
 * Internal dependencies
 */
import Track from './components/track';
import './editor.scss';

const TEMPLATE = [ [ 'yard/slide' ] ];
const ALLOWED_BLOCKS = [ 'yard/slide' ];

const Edit = ( props ) => {
	const { setAttributes, clientId } = props;

	const [ currentSlide, setCurrentSlide ] = useState( null );

	const { currentBlockInnerBlocks } = useCurrentBlock();

	const currentSelectedBlock = useSelect( ( select ) =>
		select( 'core/block-editor' ).getSelectedBlockClientId()
	);

	const { insertBlock, selectBlock } = useDispatch( 'core/block-editor' );

	/**
	 * Insert slide (at the end of the slider)
	 */
	const insertSlide = () => {
		const slide = createBlock( 'yard/slide' );

		insertBlock( slide, currentBlockInnerBlocks.length, clientId );

		setCurrentSlide( slide.clientId );
	};

	/**
	 * Set and select an active slide.
	 *
	 * @param {number} id
	 */
	const selectSlide = ( id ) => {
		setCurrentSlide( id );
		selectBlock( id );
	};

	/**
	 * When placing the block for the first time in the content, set the first slide as active slide.
	 */
	useEffect( () => {
		if ( currentBlockInnerBlocks.length > 0 && ! currentSlide ) {
			setCurrentSlide( currentBlockInnerBlocks[ 0 ].clientId );
		}
	}, [ currentBlockInnerBlocks ] );

	/**
	 * Set attribute to use "providesContext" in child slide blocks
	 */
	useEffect( () => {
		setAttributes( { activeSlide: currentSlide } );
	}, [ currentSlide ] );

	/**
	 * Edge case: sometimes the currentSlide is null, showing an empty slider (for example when you delete a slide).
	 * In that case, we need to set the currentSlide to the selectedBlock from the core/block-editor store.
	 */
	useEffect( () => {
		if (
			currentBlockInnerBlocks.some(
				( block ) => block.clientId === currentSelectedBlock
			)
		) {
			setCurrentSlide( currentSelectedBlock );
		}
	}, [ currentBlockInnerBlocks, currentSelectedBlock ] );

	return (
		<div { ...useBlockProps() }>
			<Track
				currentSlide={ currentSlide }
				innerBlocks={ currentBlockInnerBlocks }
				selectSlide={ selectSlide }
				insertSlide={ insertSlide }
			/>

			<InnerBlocks
				renderAppender={ false }
				allowedBlocks={ ALLOWED_BLOCKS }
				defaultBlock={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
				templateLock={ false }
			/>

			<Track
				currentSlide={ currentSlide }
				innerBlocks={ currentBlockInnerBlocks }
				selectSlide={ selectSlide }
				insertSlide={ insertSlide }
			/>
		</div>
	);
};

export default Edit;
