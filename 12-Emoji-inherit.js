// It's parent component
import React from 'react';

export default class Emoji extends React.Component {

  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render(override) {  // child component Text.js a text override krar jnno ei param nilm
    let text = "I am Emoji Component";

    if(override) text = override;

    return (
      <div>{text}</div>
    );
  }
}