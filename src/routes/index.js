import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home, NotFound} from '../pages';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default Routes;
