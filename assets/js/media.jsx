import React from 'react';
import {css} from 'styled-components';

// Assume these are the usual breakpoints of devices, each correspond to a device viewport
export const breakpoints = {
  small: 767,// mobile
  medium: 1210,// tablet
  large: 1440,// desktop
  xlarge: 1920,// TV
  xxlarge: 0// even larger device viewport; treat 0 as no max-width limit
};

// Iterate through the breakpoints and create media templates
export const media = Object.keys(breakpoints).reduce((acc, label, i, arr) => {
  acc[label] = (...args) => {
    const breakpoint = breakpoints[label];
    const queryAttr = breakpoint ? 'max-width' : 'min-width';
    const queryVal = breakpoint || breakpoints[arr[i - 1]] + 1;

    return css`
      @media (${queryAttr}: ${queryVal / 16}em) {
        ${css(...args)}
      }
    `;
  };

  return acc;
}, {});