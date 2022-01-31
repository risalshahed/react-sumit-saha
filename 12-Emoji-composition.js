// It's parent component
import React from 'react';

export default class Emoji extends React.Component {

  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render() {
    // App.js a, text component is child of emoji component; so we use this.props.children function; jno ei function addEmoji pathiye dte pare; BUT ei addEmoji pathaite hoile kisu facts ...\
    // app.js a; text, emoji er child; so, text er props paite hoile, "app.js" file a addEmoji props destructure krte hbe!
    return this.props.children( {addEmoji: this.addEmoji} );
  }
}