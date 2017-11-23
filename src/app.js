import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 1700, createdAt: 21000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1000 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
