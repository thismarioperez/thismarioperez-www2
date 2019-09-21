/**
 * @public
 * @namespace dom
 * @memberof core
 * @description Holds high-level cached nodes.
 *
 */
const dom = {
    /**
     *
     * @public
     * @member html
     * @memberof core.dom
     * @description the cached documentElement node
     *
     */
    html: document.documentElement,

    /**
     *
     * @public
     * @member body
     * @memberof core.dom
     * @description the cached body node
     *
     */
    body: document.body,

    /**
     *
     * @public
     * @member main
     * @memberof core.dom
     * @description the cached main node
     *
     */
    app: document.getElementById('app')
};

/******************************************************************************
 * Export
 *******************************************************************************/
export default dom;
