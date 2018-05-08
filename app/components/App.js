import _ from 'lodash';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from 'app/routes';
import PageRoute from './PageRoute';
import NotFound from './NotFound';


const App = () => (
    <Switch>
        {_.map(routes, (route, path) => (
            <PageRoute
                key={path}
                path={path}
                exact={route.exact}
                action={route.action}
                Component={route.component}
            />
        ))}
        <Route component={NotFound} />
    </Switch>
);

export default App;
