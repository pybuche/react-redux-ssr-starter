import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


const PageRoute = ({ path, exact = false, Component, action }) => (
    <Route
        exact={exact}
        path={path}
        render={() => (<Component initAction={action} />)}
    />
);

PageRoute.propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string.isRequired,
    Component: PropTypes.func.isRequired,
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
    }),
};

export default PageRoute;
