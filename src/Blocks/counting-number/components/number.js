const Number = ( props ) => {
	const { attributes } = props;
	const { number, numberPrefix, numberSuffix } = attributes;

	return (
		<>
			{ numberPrefix && (
				<span className="wp-block-yard-counting-number__prefix">
					{ numberPrefix }
				</span>
			) }
			<span className="wp-block-yard-counting-number__number">
				{ number?.replace( /\./g, ',' ) }
			</span>
			{ numberSuffix && (
				<span className="wp-block-yard-counting-number__suffix">
					{ numberSuffix }
				</span>
			) }
		</>
	);
};

export default Number;
