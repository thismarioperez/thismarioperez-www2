import WebFont from 'webfontloader';
import * as core from '../core';

/**
 *
 * @private
 * @function fontLoadingDone
 * @description Fires an event when font loading is over.
 *
 */
const fontLoadingDone = () => {};

/**
 *
 * @private
 * @function handleActive
 * @description Gives the client a hint that the font is cached.
 *              Only runs when a font is active
 *
 */
const handleActive = () => {
    // manipulate session storage to detect if font is cached
    sessionStorage.setItem('tmpl_fonts', 'true');
    fontLoadingDone();
};

/**
 *
 * @private
 * @function handleInActive
 * @description Logs that the font failed to load
 *
 */
const handleInActive = (family, fvd) => {
    core.dom.html.classList.add('wf-active');
    core.log(`fonts: failed to load ${family} family. ${fvd}`);
};

/**
 *
 * @private
 * @description Configuration object for WebFont
 * @member config
 * @memberof fonts
 *
 */
const config = {
    google: {
        families: ['Source Code Pro:200,400,700']
    },
    active: handleActive,
    fontInactive: handleInActive
};

/**
 *
 * @public
 * @method init
 * @memberof fonts
 * @description Kicks off WebFont
 *
 */
const init = () => {
    if (sessionStorage.tmpl_fonts) {
        // update app state to wf-active
    }
    WebFont.load(config);
    core.log('fontsController: initialized');
};

/**
 *
 * @public
 * @member fontsController
 * @memberof App
 * @description Single instance of webfontloader.
 *              Loads app fonts from Typekit CDN with local fallbacks.
 *              Uses a sessionStorage item to load cached fonts.
 *
 */
const fontsController = {
    init
};

/******************************************************************************
 * Export
 *******************************************************************************/
export default fontsController;
