
import * as React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'whatwg-fetch';

import App from './containers/App';
import reducer from './reducers';
const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

