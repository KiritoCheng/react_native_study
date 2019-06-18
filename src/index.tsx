
import * as React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import App from './containers/App';
import reducer from './reducers';

const store = createStore(
    reducer,{},
    applyMiddleware(ReduxThunk)
);

export default () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

