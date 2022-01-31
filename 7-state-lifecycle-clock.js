// import React from 'react'; // React import is not necessary on current versions

import React from 'react'; // React.Component dle eita MANDATORY

  // stafeul component hoile class component MUST; else function component lekha jaite pare

  class Clock extends React.Component {
    // Clock k run kraite hoile, state change kraite hbe
    // state is a JS Object; ei component er akta DB
    
    // akta class a kisu initialize krte, constructor function nite hy
    /* constructor(props) {  // react always props parameter soho constructor k call krbe
      super(props);   // super base class (React.Component) k call kre
      this.state = { date: new Date() };
    } */

    // jehetu, amra props use krinai uporer code a, so amra constructor function na niye, eivabe shortcut a ak line a likhte pari!
    state = { date: new Date() };

    // componentDidMount React Class Component er akta Life Cycle Hook/Event
    componentDidMount() {
      this.clockTimer = setInterval( () => this.tick(), 1000);   // 1000 miliseconds i.e. 1 second; "tick" function is declared after componentWillUnmount(); "tick" jehetu class er e akta method, so jokhn e "tick" amra arekta method er mddhe use krte jabo, tokhn "this" likhe use krbo
    }

    // BUT, ei j timer on krlm, jokhn amra scroll kore chole jabo, i mean watch amdr chokh er samne thakbe na, tokhn o timer on thakbe! but it MUST BE STOPPED then!

    componentWillUnmount() {  // component UNMOUNT howar THIK AAGER muhurte,
      clearInterval(this.clockTimer);
    }

    // ei tick function (below) ta ei class "Clock" er e akta method, tai eita k jokhn access krte jabo tar agey this (above) diye nibo

    tick() {
      {
        this.setState({   // Component er state change kore react k reactive krar code..
          date: new Date(), // this.state.date = new Date(); <- NEVER DO IT
        });
      }
    }
    
    // print() {  extends React.Component dle, print() will be replaced by render()
    render() {  // render() is defined in React.Component
      // (###) this.props.locale = 'en-US' <- NEVER DO IT! krle INFINITY loop hye jabe!
      return (
        <h1 className="heading">
          <span className="text">Hello, {this.props.children} {this.state.date.toLocaleTimeString(this.props.locale)}</span>
        </h1>
      );  // here, this -> React.Component  // props <- properties
    }
  }

  export default Clock; // Import er jnno Clock k export kra hoilo