import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import PageNotFound404 from './PageNotFound';
import Intro from './Intro';
import PortfolioPage from './portfolio/PortfolioPage';
import './App.scss';

const App = () => {
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
