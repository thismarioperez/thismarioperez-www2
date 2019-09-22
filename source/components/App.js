import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import fonts from '../modules/fonts';
import Header from './common/Header';
import PageNotFound404 from './PageNotFound';
import IntroPage from './intro/IntroPage';
import PortfolioPage from './portfolio/PortfolioPage';

const App = () => {
    useEffect(() => {
        // Load webfonts
        fonts.init();
    }, []);

    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/' component={IntroPage} />
                <Route path='/portfolio' component={PortfolioPage} />
                <Route component={PageNotFound404}></Route>
            </Switch>
        </>
    );
};

export default App;
