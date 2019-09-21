import * as core from './core';
import React from 'react';
import { render } from 'react-dom';
import fonts from './modules/fonts';
import App from './components/App';
import './index.scss';

fonts.init();
render(<App />, core.dom.app);
