import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Page from 'app/components/ConnectedPage';


export class Home extends Page {
    static propTypes = {
        data: PropTypes.string,
        ready: PropTypes.bool,
    };

    render() {
        const { data } = this.props;
        return (
            <div>
                <h1>Home</h1>
                <div>{data}</div>
                <Link to="/user">Go to user page</Link>
            </div>
        );
    }
}

export default connect(state => ({
    data: _.get(state, 'pages.home.data', 'nothing'),
    ready: _.get(state, 'pages.home.ready', false),
}))(Home);
