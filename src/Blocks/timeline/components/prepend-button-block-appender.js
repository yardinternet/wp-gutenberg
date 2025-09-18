/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { Icon, plus } from '@wordpress/icons';
import { createBlock } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

const PrependButtonBlockAppender = ( { rootClientId } ) => {
	const { insertBlocks } = useDispatch( 'core/block-editor' );

	const handleClick = () => {
		const newBlock = createBlock( 'yard/timeline-item' );
		insertBlocks( newBlock, 0, rootClientId );
	};

	return (
		<Button
			__next40pxDefaultSize
			className="block-editor-button-block-appender"
			aria-label={ __(
				'Voeg tijdlijn item vooraan toe.',
				'yard-gutenberg'
			) }
			onClick={ handleClick }
		>
			<Icon icon={ plus } />
		</Button>
	);
};

export default PrependButtonBlockAppender;
