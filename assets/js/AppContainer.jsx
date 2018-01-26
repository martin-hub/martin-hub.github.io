import React from 'react';
import styled from 'styled-components';
import {media} from './media.jsx';

/**
 * This is the root component of the app, styling the page background & vertical padding responsively
 */
const AppContainer = styled.div`
  background-color: #0D0E0F;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;

  ${media.xxlarge`
    padding: 90px 0;
  `}

  ${media.xlarge`
    padding: 70px 0;
  `}

  ${media.large`
    padding: 35px 0;
  `}

  ${media.medium`
    padding: 0;
  `}

  ${media.small`
    padding: 0;
  `}

  &,
  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

export default AppContainer;
