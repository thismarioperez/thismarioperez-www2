/*******************************************************************************
 * Polyfills
 ******************************************************************************/
require('./polyfill');

/**
 * @public
 * @class Application
 * @classdesc Load the App application Class to handle it ALL.
 */
import * as core from './core';
import scrollController from './controllers/scrollController';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.scss';

class Application {
    constructor() {
        this.core = core;
        this.scrollController = scrollController;
        this.init();
    }

    render() {
        return render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
            this.core.dom.app
        );
    }

    init() {
        // Feature detection
        this.core.detect.init(this);
        // Load webfonts
        this.core.fonts.init(this);
        // React dom render
        this.render();
    }
}

/*******************************************************************************
 * Expose
 ******************************************************************************/
window.application = new Application();

/*******************************************************************************
 * Export
 ******************************************************************************/
export default window.application;
