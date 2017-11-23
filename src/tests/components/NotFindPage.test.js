import React from 'react';
import { shallow } from 'enzyme';
import NotFindPage from '../../components/NotFindPage';

test('should render NotFindPage correctly', () => {
  const wrapper = shallow(<NotFindPage />);
  expect(wrapper).toMatchSnapshot();
});
