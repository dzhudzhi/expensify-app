import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not find', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'Ice Cream',
    note: '',
    amount: 15,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'Ice Cream',
    note: 'Some notes',
    amount: 25,
    createdAt: 0
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual({...expenses[0], ...updates });
});

test('should not edit an expense if id not found', () => {
  const updates = {
    description: 'Ice Cream',
    note: 'Some notes',
    amount: 25,
    createdAt: 0
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '100',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
