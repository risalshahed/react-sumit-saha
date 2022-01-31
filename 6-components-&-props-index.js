import React from 'react'; // React import is not necessary on current versions
import ReactDOM from 'react-dom';

// element er property change krar jnno react amdr k kisu dey nai

// akta dumb element; ja change kra jayna, ta diye amdr kaj nai, so we need component
// component has functional characteristics

  /* function Clock({
    locale: 'bn-BD' // eivabe akta object akare chole asbe nijer parameter thk
  }) { */
  
  // functional component
  /* function Clock() {  // object destruring er way te eikhane locale received holo
    return (
      <h1 className="heading">
        <span className="text">Hello {new Date().toLocaleTimeString()}</span>
      </h1>
    );  
  } */

  // ReactDOM.render(Clock(), document.getElementById('root'));
  
  /* function Clock({locale}) {  // object destruring er way te eikhane locale received holo
    return (
      <h1 className="heading">
        <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span>
      </h1>
    );  
  }

  // span tag er vitore, locale parameter pass kora hoilo

  ReactDOM.render(<Clock locale='bn-BD' />, document.getElementById('root')); */
  // here, locale parameter with value dlm!

  // ekhane, return er pore () er vitore element const er shobkisui akta React Element ba JS Expression
  // i.e. React Elements are valid JS Expression

  // ei j function declare krlm, ei function e hoilo REACT COMPONENT!

  // React Components return React Elements (return er pore () er vitorer shobkisui React elements) i.e. React component jeita return kre seita hoilo React element

  // Class Component
  // class Clock {
  // Class k nijer component akare chinate hoile, class Clock er por write as following
  class Clock extends React.Component {
    // print() {  // extends React.Component dle, print() will be replaced by render()
    render() {  // render() is defined in React.Component
      // (###) this.props.locale = 'en-US' <- NEVER DO IT! krle INFINITY loop hye jabe!
      return (
        <h1 className="heading">
          <span className="text">Hello, {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
        </h1>
        // this.props.children na dle, ReactDOM.render a, Clock tag er child a j "It's now" asey, ta print hbe na
      );  // here, this -> React.Component  // props <- properties
    }
  }

  // Class component a this.props.something; Functional component a props.something
  // class k function er mto call kra jay na! tai nicher line likhte hy, BUT (***)
  // const clockComponent = new Clock();
  // (***) extends React.Component dle, tokhn r "new Clock();" lekha lage na
  
  // ReactDOM.render(Clock(), document.getElementById('root'));
  // Above & Below Code is similar

  // ReactDOM.render(<Clock locale='bn-BD' />, document.getElementById('root'));
  // here, locale='bn-BD' is parameter or attribute, ei parameter uporer declare function Clock a pass hye jabe

  // V.V.I. Case senstive (clock won't work, write Clock, according to function name)
  
  
  // ReactDOM.render(clockComponent.print(), document.getElementById('root'));

  // ReactDOM.render(<clockComponent />.print(), document.getElementById('root'));
  // this will give error; krn class k eivabe call kra jayna, sudhu function k e eivabe call/ invoke kra jay

  // class Clock extends React.Component {.....} lekhar pore, following code will work!
  ReactDOM.render(<Clock locale='bn-BD'>It's now</Clock>, document.getElementById('root'));
  // jokhn <Clock> tag er child re-render hbe, tokhn <Clock> tag i.e. parent o re-render hbe

  // ei parameter React.Component er props a add hbe
  // never change the value of props e.g. 'bn-BD' INSIDE function/class (###)
  // sudhu function/class er BAHIRE props er value change kra jabe

  // Encapsulated means all funcitonalities are self-contained

  // V.V.I. amdr application k ei rkm bivinno component a vaag kore nibo, shei component amra REUSE krte parbo; akta component er mddhe arekta component nested krte parbo; akta component k venge arekta component nite parbo;


