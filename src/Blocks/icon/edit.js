/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Icon from '../../EditorComponents/icon';
import Inspector from './components/inspector';
import './editor.scss';

const edit = ( props ) => {
	const { attributes } = props;
	const { icon } = attributes;

	return (
		<div { ...useBlockProps() }>
			<Inspector { ...props } />
			{ icon && <Icon { ...props } /> }
		</div>
	);
};

export default edit;
