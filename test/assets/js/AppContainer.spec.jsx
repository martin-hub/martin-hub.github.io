import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import AppContainer from 'AppContainer.jsx';

describe("AppContainer", () => {
  test('renders correctly', () => {
    expect(renderer.create(<AppContainer />).toJSON()).toMatchSnapshot();
  });
});