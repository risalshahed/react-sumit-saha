// import React from "react";

// class HoverCounter extends React.Component {

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

  const HoverCounter = (props) => {
    const { count, incrementCount } = props;

    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hovered { count } times</h1>
      </div>
    );
  }
    /* const { count } = this.state;

    return (
      <div>
        <h1 onMouseOver={this.incrementCount}>Hovered { count } times</h1>
      </div>
    ); */
  // }
// }

// withCounter(HoverCounter) is a NewComponent according to the definition of higher order component (Notes.docx); shei NewComponent k amra eikhane export kri
export default withCounter(HoverCounter);