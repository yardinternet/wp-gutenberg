const init = () => {
	const timelines = document.querySelectorAll( '.wp-block-yard-timeline' );

	if ( ! timelines.length ) return;

	timelines.forEach( initTimeline );
};

const initTimeline = ( timeline ) => {
	const timelineItems = timeline.querySelectorAll(
		'.wp-block-yard-timeline-item'
	);
	const progressLine = timeline.querySelector(
		'.wp-block-yard-timeline-progress-line'
	);

	if ( ! timelineItems.length || ! progressLine ) return;

	alignProgressLine( timelineItems, progressLine );
};

/**
 * Aligns the progress line to the middle of the first and last elements
 *
 * @param {NodeListOf<HTMLElement>} allElements
 * @param {HTMLElement}             line
 */
const alignProgressLine = ( allElements, line ) => {
	if ( allElements.length < 2 ) return;

	line.style.top = `${ allElements[ 0 ].offsetHeight / 2 }px`;
	line.style.bottom = `${
		allElements[ allElements.length - 1 ].offsetHeight / 2
	}px`;
};

init();
