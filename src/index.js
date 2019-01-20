import React from 'react';
import ReactDom from 'react-dom'; 
import { createStore, applyMiddleware } from 'redux'; //creates the reduxStore
import { Provider } from 'react-redux'; //this connects react and redux
import reduxThunk from 'redux-thunk'; //this is a middleware
import App from './App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';


//create redux store here
export const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(<Provider store={store}><App /></Provider>,
                document.querySelector('#root'));

serviceWorker.unregister();