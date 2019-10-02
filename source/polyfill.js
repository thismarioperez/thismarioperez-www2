/**
 * Core JS
 * @see https://github.com/zloirock/core-js/tree/master/packages/core-js/stable
 */
require('core-js/stable');

/**
 * regeneratorRuntime
 * @see https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime
 */
require('regenerator-runtime/runtime');

/**
 * Intersection Observer Polyfill
 * @see https://github.com/w3c/IntersectionObserver/tree/master/polyfill
 */
if (typeof IntersectionObserver === 'undefined') {
    require('intersection-observer');
}
