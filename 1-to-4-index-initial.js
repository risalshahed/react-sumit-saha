import React from 'react';

// Create a React element
const element = React.createElement('h1', null, 'Hello Guys');

console.log(element);

// React er element hosse amn simple 1ta JS Object, uporer reactElement r nicher JS Object er element SAME
/*
  type: 'h1',
  props: {
    children: 'Hello Guys'
  }
*/

// const element = React.createElement('h1', null, 'Hello Guys');
// now, ei reactElement na likhe, amra JSX likhe react DOM or virtual DOM banabo.

// const element = <h1>Hello Guys</h1>;


// V.V.I. -> eikhane sbkisui JSX, not HTML! so, write className instead of class

// const element = <h1 className='heading'>Hello Guys</h1>;
// Equivalent to
// const element = React.createElement('h1', {className: 'heading'}, 'Hello Guys');