import React from "react";

// era jokhn nijer state ni j handle krbe na, baire thk control hbe, tokhn amra ei class component na niye functional component niye nibo
export default class HoverCounter extends React.Component {

    render() {
      const { count, incrementCount } = this.props;

    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hovered { count } times</h1>
      </div>
    );
  }
}