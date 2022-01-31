// to avoid code duplication (ak e type funcionality er different components na baniye amra akta resusable component banabo)
// notes is on notes.docx file

import React from 'react';

const withCounter = (OriginalComponent) => {

  class NewComponent extends React.Component {
    state = {
      count: 0,
    };
  
    incrementCount = () => {
      this.setState( (prevState) => ({
        count: prevState.count + 1
      }) );
    }

    render() {
      const { count } = this.state;
      return <OriginalComponent count={count} incrementCount={this.incrementCount} />;
      // ei OriginalComponent hosse exported withCounter(ClickCounter) er ClickCounter; withCounter(HoverCounter) er HoverCounter
    }

  }

  return NewComponent;

}

export default withCounter;