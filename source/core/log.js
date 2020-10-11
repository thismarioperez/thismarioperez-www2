import env from "./env";

/**
 *
 * @public
 * @method log
 * @memberof core
 * @description Normalized app console logger.
 *              If you want to use another console method like `info` or `warn`
 *              you can pass it as the first argument to the `log` method here.
 *              The default method that will be assumed is `console.log`.
 *
 *              Examples:
 *              log( "info", ...args )
 *              log( "warn", ...args )
 *              log( "trace", ...args )
 *              log( "debug", ...args )
 *
 */
const log = (...args) => {
    if (env.IS_PROD() || !("console" in window)) {
        return;
    }

    let method = "log";

    if (typeof console[args[0]] === "function") {
        method = args[0];
        args = args.slice(1, args.length);
    }

    window.console[method](...args);
};

/**
 * Export
 */
export default log;
