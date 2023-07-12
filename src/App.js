import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Header from './components/Header';
import Home from './components/Home';
import AddTask from './components/AddTask';
import WeekTask from './components/WeekTask';
// import actions from './actions'

const App = () => {
    return (
        <div className='ui container' >
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/AddTask' exact component={AddTask} />
                    <Route path='/WeekTask' exact component={WeekTask} />
                </Switch>
            </Router>
        </div>
    )
};

export default App;