import React from 'react';
import styled from 'styled-components';
import {media} from './media.jsx';

const LogoImage = styled.img``;

const TileImage = styled.img`
  display: block;
  width: 100%;
`;

const ItemName = styled.div`
  color: #FEFEFC;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ItemBottomBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 28%;
  background-color: rgba(0, 0, 0, 0.5);

  ${LogoImage} {
    flex: 0 1;
    height: 80%;
    padding: 0 16px;
  }

  ${ItemName} {
    flex: auto;

    ${media.xxlarge`
      font-size: 55px;
    `}
    
    ${
  media.xlarge`
      font-size: 45px;
    `}
    
    ${media.large`
      font-size: 38px;
    `}

    ${media.medium`
      font-size: 30px;
    `}

    ${media.small`
      font-size: 20px;
    `}
  }
`;

const ItemTile = styled.div`
  position: relative;
`;

const ItemContainer = styled.div`
  position: relative;
  background-color: black;
  width: 900px;
  max-width: 100%;
  padding: 16px;

  ${media.medium`
    width: 75%;
  `}

  ${media.small`
    width: 100%;
    padding: 10px;
  `}

  ${ItemTile} {
    height: 100%;
  }

  ${ItemBottomBar} {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

/**
 * This component puts together the individual styled sub-component, to present an item box.
 */
const Item = ({className, title, imageUrl, ...rest}) => <ItemContainer>
  <a href='#' title={title} className={className} {...rest}>
    <ItemTile>
      <TileImage src={imageUrl}/>
      <ItemBottomBar>
        <LogoImage src='image/logo.png'/>
        <ItemName>{title}</ItemName>
      </ItemBottomBar>
    </ItemTile>
  </a>
</ItemContainer>;

export default Item;
