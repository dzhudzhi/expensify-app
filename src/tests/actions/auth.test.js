import { login, logout } from '../../actions/auth';

test('should setup logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});

test('should setup login action object', () => {
  const uid = 'adsfadsf41351235';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});
