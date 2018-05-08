import _ from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import routes from 'app/routes';
import App from 'app/components/App';
import initSaga from 'app/redux/sagas/init';
import reducers from 'app/redux/reducers';


export function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <link rel="icon" href="/public/favicon.ico" />
        <title>Staycation v2</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/public/dist/client.js"></script>
      </body>
    </html>
    `;
}

export function handleRender(req, res) {
    const context = {};

    const preloadedState = {};
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, preloadedState, applyMiddleware(sagaMiddleware));

    const sagas = sagaMiddleware.run(initSaga);
    const actionToDispatch = _.get(routes, `${req.url}.action`);

    let status = 200;
    if (actionToDispatch) {
        store.dispatch(actionToDispatch);
    } else {
        status = 404;
        sagas.cancel();
    }

    sagas.done.then(() => {
        // Render the component to a string
        const html = (
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        );

        // Grab the initial state from our Redux store
        const finalState = store.getState();

        // Send the rendered page back to the client
        res.status(status).send(renderFullPage(renderToString(html), finalState));
    });
}
