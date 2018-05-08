import { Component } from 'react';
import PropTypes from 'prop-types';


class ConnectedPage extends Component {
    static propTypes = {
        ready: PropTypes.bool,
        dispatch: PropTypes.func.isRequired,
        initAction: PropTypes.shape.isRequired,
    };

    componentWillMount() {
        const { dispatch, ready, initAction } = this.props;
        if (!ready) {
            dispatch(initAction);
        }
    }
}

export default ConnectedPage;
