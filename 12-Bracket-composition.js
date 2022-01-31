// It's parent component
import React from 'react';

export default class Bracket extends React.Component {

  addBracket = (text) => `{ ${text} }`;

  render() {
    // App.js a, text component is child of Bracket component; so we use this.props.children function; jno ei function addBracket pathiye dte pare; BUT ei addBracket pathaite hoile kisu facts ...\
    // app.js a; text, Bracket er child; so, text er props paite hoile, "app.js" file a addBracket props destructure krte hbe!
    return this.props.children( {addBracket: this.addBracket} );
  }
}