import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Item from 'Item.jsx';

describe("Item", () => {
  test('renders correctly', () => {
    expect(renderer.create(<Item />).toJSON()).toMatchSnapshot();
    expect(renderer.create(<Item title="Rick and Morty" image="image/rnm.jpg" />).toJSON()).toMatchSnapshot();
    expect(renderer.create(<Item className="test-class" otherFakeAttr='fake-value' />).toJSON()).toMatchSnapshot();
  });
});