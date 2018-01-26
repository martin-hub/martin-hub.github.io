jest.mock('styled-components');

import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {css} from 'styled-components';

import {media, breakpoints} from 'media.jsx';

describe("media", () => {
  const breakpointLabels = Object.keys(breakpoints);
  const assertPassedArgsToCss = (...args) => {
    expect(css).toHaveBeenCalledTimes(2);
    expect(css).toHaveBeenCalledWith(...args);
  };
  const fakeListOfArgs = [
    [],
    [{}],
    [1, 'test', false]
  ];

  afterEach(() => css.mockReset());

  fakeListOfArgs.forEach(args => {
    breakpointLabels.forEach(label => {
      test('argument passed to `css` method', () => {
        media[label](...args);
        assertPassedArgsToCss(...args);
      });
    });
  });
});