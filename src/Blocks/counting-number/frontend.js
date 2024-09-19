import { CountUp } from 'countup.js';

const init = () => {
	const countingNumbers = document.querySelectorAll(
		'.wp-block-yard-counting-number__number'
	);

	countingNumbers.forEach( ( number ) => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.0,
		};

		const observer = new IntersectionObserver(
			( changes ) => handleCountUpObserver( changes, number ),
			options
		);

		observer.observe( number );
	} );
};

/**
 * Starts CountUp animation when intersecting.
 *
 * @param {Array}       changes
 * @param {HTMLElement} number
 */
const handleCountUpObserver = ( changes, number ) => {
	changes.forEach( ( change ) => {
		if ( change.isIntersecting && change.boundingClientRect.top > 300 ) {
			const parent = number.parentElement;
			const hasThousandsSeparator =
				parent.dataset.hasthousandsseparator === 'true';
			const animationDuration = Number(
				parent.dataset.animationduration
			);

			let countUpInit = parent.dataset.number ?? number.innerHTML;
			let options = {
				duration: animationDuration,
				separator: '.',
				decimal: ',',
			};

			countUpInit = countUpInit.replace( /\./g, '' );

			if ( countUpInit.includes( ',' ) ) {
				options = {
					...options,
					decimalPlaces: countUpInit.split( ',' ).slice( -1 )[ 0 ]
						.length,
				};
				countUpInit = countUpInit.replace( /\,/g, '.' );
			}

			if ( ! hasThousandsSeparator ) {
				options = {
					...options,
					separator: '',
				};
			}

			const countUp = new CountUp( number, countUpInit, options );

			if ( ! countUp.error ) {
				setTimeout( () => {
					countUp.start();
				}, 400 );
			}
		}
	} );
};

init();
