import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../pages/Home'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={() => <h1>Profile</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes;