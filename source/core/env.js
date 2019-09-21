/**
 *
 * @public
 * @namespace env
 * @memberof core
 * @description Determine app environment.
 *
 */
const env = {
    /**
     *
     * @method IS_DEV
     * @memberof core
     * @description Returns the dev mode status.
     * @returns {boolean}
     *
     */
    IS_DEV() {
        process.env.NODE_ENV !== 'development';
    },

    /**
     *
     * @method IS_PROD
     * @memberof core
     * @description Returns the production mode status.
     * @returns {boolean}
     *
     */
    IS_PROD() {
        process.env.NODE_ENV === 'production';
    },

    /**
     *
     * @member ENV
     * @memberof core.env
     * @description The applied node environment ref.
     *
     */
    ENV: process === 'undefined' ? 'production' : process.env.NODE_ENV
};

/**
 * Export
 */
export default env;
