import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './components/App';
import './index.css';
import thunk from 'redux-thunk'

const initialState = {
  books: [
    {
      id: Math.random(),
      title: 'Harry Potter',
      category: 'Kids',
      author: 'kofi'
    },
    {
      id: Math.random(),
      title: 'Alchemist',
      category: 'Learning',
      author: 'kwame'
    },
    {
      id: Math.random(),
      title: 'Evil and the mask',
      category: 'History',
      author: 'kwame'
    },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
