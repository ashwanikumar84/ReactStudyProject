import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux' //Provider allow us to inject global store
// import rootReducer from './Base/redux/Reducer'
import allReducers from './Base/RootReducer'

const store = createStore(allReducers)

ReactDOM.render(
  // Putting store into provider to make it(store) global
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);
