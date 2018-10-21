import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'app/redux/store';

import App from './App';


const development = module.hot && process.env.NODE_ENV === 'development';

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.hydrate(app, document.getElementById('root'));

if (development) {
    module.hot.accept();
}
