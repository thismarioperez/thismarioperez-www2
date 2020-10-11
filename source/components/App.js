import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import PageNotFound from './Pages/404';
import IntroPage from './Pages/IntroPage';
import PortfolioPage from './Pages/PortfolioPage';
import './App.scss';

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/' component={IntroPage} />
                <Route path='/portfolio' component={PortfolioPage} />
                <Route component={PageNotFound}></Route>
            </Switch>
        </>
    );
};

export default App;
