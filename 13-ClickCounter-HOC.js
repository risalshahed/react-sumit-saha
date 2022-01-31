// import React from "react";

// class ClickCounter extends React.Component {

// avoiding code duplication
  /* state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState( (prevState) => ({
      count: prevState.count + 1
    }) );
  } */

  // eikhan thk jehetu state management krbo na, so we'll use functional component

import withCounter from './HOC/withCounter';

  // render() {

  const ClickCounter = (props) => {
    const { count, incrementCount } = props;

    return (
      <div>
        <button type="button" onClick={incrementCount}>Clicked { count } times</button>
      </div>
    );
  }
    /* const { count } = this.state;

    return (
      <div>
        <button type="button" onClick={this.incrementCount}>Clicked { count } times</button>
      </div>
    ); */
  // }
// }

// withCounter(ClickCounter) is a NewComponent according to the definition of higher order component (Notes.docx); shei NewComponent k amra eikhane export kri
export default withCounter(ClickCounter);