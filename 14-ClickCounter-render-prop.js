import React from "react";

// era jokhn nijer state ni j handle krbe na, baire thk control hbe, tokhn amra ei class component na niye functional component niye nibo
export default class ClickCounter extends React.Component {

  render() {
    const { count, incrementCount } = this.props;

    return (
      <div>
        <button type="button" onClick={incrementCount}>Clicked { count } times</button>
      </div>
    );
  }
}