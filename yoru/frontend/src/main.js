import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Login from './login';

// Alternative to route.js
// Returns which ever route is active
const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
        </Switch>
    );
}

export default Main;