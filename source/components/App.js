import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import fontsController from '../controllers/fontsController';
import scrollController from '../controllers/scrollController';
import Header from './common/Header';
import PageNotFound404 from './PageNotFound';
import Intro from './Intro';
import PortfolioPage from './portfolio/PortfolioPage';
import './App.scss';

const App = () => {
    useEffect(() => {
        // Load webfonts
        fontsController.init();
        // Start document-wide scroll handling
        scrollController.init();
    }, []);

    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/' component={Intro} />
                <Route path='/portfolio' component={PortfolioPage} />
                <Route component={PageNotFound404}></Route>
            </Switch>
        </>
    );
};

export default App;
