/**
 * Font Awesome 6 -> 7 compatibility shim.
 *
 * FA7 no longer ships a "v6-font-face.css" like it did for v4/v5. This
 * script re-registers the legacy "Font Awesome 6 ..." font-family names
 * so hardcoded legacy CSS (font-family: "Font Awesome 6 Pro", etc.) keeps
 * working during a migration to FA7.
 *
 * Instead of hardcoding webfont URLs (which differ per site depending on
 * the Kit version, license and unicode-range subsetting), this reads the
 * @font-face rules FA7's own Kit already injected on the page and clones
 * them under the old family name. That makes it work automatically across
 * every project regardless of which FA7 Kit/version/styles it uses.
 */
( function () {
	const CURRENT_PREFIX = 'Font Awesome 7';
	const LEGACY_PREFIX = 'Font Awesome 6';
	const seen = new Set();

	function shimStyleSheet( styleSheet ) {
		let rules;

		try {
			rules = styleSheet.cssRules;
		} catch ( error ) {
			// Cross-origin stylesheet we can't read; nothing to do.
			return;
		}

		if ( ! rules ) {
			return;
		}

		const legacyRules = [];

		for ( const rule of rules ) {
			if ( rule.type !== CSSRule.FONT_FACE_RULE ) {
				continue;
			}

			const fontFamily = rule.style.getPropertyValue( 'font-family' ) || '';

			if ( ! fontFamily.includes( CURRENT_PREFIX ) ) {
				continue;
			}

			if ( seen.has( rule.cssText ) ) {
				continue;
			}

			seen.add( rule.cssText );

			legacyRules.push(
				rule.cssText.replace(
					new RegExp( CURRENT_PREFIX, 'g' ),
					LEGACY_PREFIX
				)
			);
		}

		if ( ! legacyRules.length ) {
			return;
		}

		const shimSheet = document.createElement( 'style' );
		shimSheet.setAttribute( 'data-fontawesome-v6-shim', '' );
		shimSheet.textContent = legacyRules.join( '\n' );
		document.head.appendChild( shimSheet );
	}

	function shimAllStyleSheets() {
		for ( const styleSheet of document.styleSheets ) {
			shimStyleSheet( styleSheet );
		}
	}

	shimAllStyleSheets();
	window.addEventListener( 'load', shimAllStyleSheets );

	// Font Awesome Kits inject their CSS asynchronously, so keep watching
	// <head> for newly added stylesheets and shim those too.
	new MutationObserver( shimAllStyleSheets ).observe( document.head, {
		childList: true,
		subtree: true,
	} );
} )();
