import React, { useEffect } from 'react';
import fonts from '../modules/fonts';
import Header from './common/Header';
import './App.scss';

const App = () => {
    useEffect(() => {
        // Load webfonts
        fonts.init();
    }, []);

    return (
        <>
            <Header />
            <main></main>
        </>
    );
};

export default App;
