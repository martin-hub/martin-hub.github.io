import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer.jsx';
import MaxWidthContainer from './MaxWidthContainer.jsx';
import Item from './Item.jsx';

// The list of `items` data would usually come from an REST API endpoint. Here it is faked and it is assumed there is
// only one item returned.
const items = [
  {
    title: 'Home and Away',
    imageUrl: 'image/tile.jpg',
  }
];

ReactDOM.render(
  <AppContainer>
    <MaxWidthContainer>
      {items.map(({...props}, index) => <Item key={`item-${index}`} {...props}/>)}
    </MaxWidthContainer>
  </AppContainer>,
  document.getElementById('app-container')
);
