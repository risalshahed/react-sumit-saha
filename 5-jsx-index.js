import React from 'react';
import ReactDOM from 'react-dom';

// react er vitore, html element er mto dekhte ja, ta actually html na, JSX element

// Create a React element
// React.createElement(type: "input", "props", "content")

// const element = React.createElement( 'h1', {className: 'heading'}, 'Hello Guys' );

// Equivalent to (uporer JS code r nicher JSX code similar)

// const element = <h1 className="heading">Hello Guys</h1>

// uporer ei line ta sundr mto indent kore multi line a likhte hoile, use parentheses ();
/* const element = (
  <h1 className="heading">
    Hello Guys
  </h1>
); */

// JSX syntax er mddhe JS er shob power ase

// setInterval(tick, 1000 miliseconds)
setInterval( () => {
  const element = (
    <h1 className="heading">
      Hello {new Date().toLocaleTimeString()}
    </h1>
    // eikhane amra bole dssi, e.g. 10tar smy dekhao 10ta ba j, 11tay dekhao 11ta ba j, kin2 element er property e.g. className eigula amra change krte parbo na; amn drkr hoile pura new element create krte hbe
  );
  
  ReactDOM.render(element, document.getElementById('root'));
}, 1000 );

// eikhane browser na hoye android_App hoile, ReactDOM na hoye ReactNative hoito
// React a amra, eivabe element changbe krbo na! akta single element rakhbo; data change kore, stateful component er mddhe  shob characteristics encapsulate (summarize) kore rakhbo
// encapsulate -> express the essential features of (something) succinctly

// V.V.I. akta API er response dle usually site attack hy, but curly braces diye {apiResponse} eivabe dle, kono malicious code keu dleo shei value ESCAPED hye jabe & our sites will remain SECURED!

// console.log(element);



