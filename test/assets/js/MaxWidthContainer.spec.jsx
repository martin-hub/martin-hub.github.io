import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import MaxWidthContainer from 'MaxWidthContainer.jsx';

describe("MaxWidthContainer", () => {
  test('renders correctly', () => {
    expect(renderer.create(<MaxWidthContainer />).toJSON()).toMatchSnapshot();
  });
});