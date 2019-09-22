/**
 * @public
 * @module util
 * @description App-wide utility functions
 */
import dom from './dom';

/**
 *
 * @public
 * @method px
 * @memberof core.util
 * @param {string} str The value to pixel-ify
 * @returns {string}
 * @description Add pixel units when inline styling
 *
 */
export const px = str => {
    return `${str}px`;
};

/**
 *
 * @public
 * @method getHeight
 * @memberof core.util
 * @param {Object} elem The DOMElement to check the offsets of
 * @returns {string} pixel value of element's height
 * @description Get the natural height of an element including margins.
 *
 */
export const getHeight = elem => {
    let ret;
    elem.style.display = 'block';
    const styles = window.getComputedStyle(elem);
    const height = Math.ceil(
        elem.scrollHeight +
            parseFloat(styles.marginBottom) +
            parseFloat(styles.marginTop)
    );

    ret = px(height); // Get it's height in pixels. Includes margins

    elem.style.display = '';

    return ret;
};

/**
 *
 * @public
 * @method isElementVisible
 * @memberof core.util
 * @param {Object} el The DOMElement to check the offsets of
 * @returns {boolean}
 * @description Module isElementVisible method, handles element boundaries
 *
 */
export const isElementVisible = el => {
    const bounds = el.getBoundingClientRect();

    return bounds.top < window.innerHeight && bounds.bottom > 0;
};

/**
 *
 * @public
 * @method getElementsInView
 * @memberof core.util
 * @param {NodeList|Array} nodes The selected nodes to check if they're in view.
 * @returns {Array} Array of elements in view
 * @return {bool} returns false if no elements are in view.
 * @description Filters out visible elements from a selected hobo list.
 *
 */
export const getElementsInView = nodes => {
    return Array.prototype.from(nodes).map(node => {
        return isElementVisible(node) ? node : false;
    });
};

/**
 *
 * @public
 * @method getScrollPos
 * @memberof core.util
 * @returns {num} value of window's scroll offset
 * @description Get the current scroll position value
 *
 */
export const getScrollPos = () => {
    let scrollTop = Math.max(
        window.pageYOffset,
        dom.html.scrollTop,
        dom.body.scrollTop
    );
    return scrollTop;
};

/**
 *
 * @public
 * @method noop
 * @memberof util
 * @returns {boolean}
 * @description All true all the time
 *
 */
export const noop = () => {
    return true;
};
