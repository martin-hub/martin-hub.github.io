import React from 'react';
import styled from 'styled-components';
import {media} from './media.jsx';

/**
 * This component provides varying horizontal margin responsively
 */
const MaxWidthContainer = styled.div`
  margin: 0 auto;
  width: 100%;

  ${media.xxlarge`
    max-width: 1700px;
  `}
  
  ${media.xlarge`
    max-width: 1400px;
  `}
  
  ${media.large`
    max-width: 1100px;
  `}
`;

export default MaxWidthContainer;
