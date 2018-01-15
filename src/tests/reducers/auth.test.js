import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const uid = 'adsfadsf41351235';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid fro logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'adsfasdfasdfadsf' }, action);
  expect(state).toEqual({});
});
