// import React from 'react'; // React import is not necessary on current versions

import React from 'react'; // React.Component dle eita MANDATORY
import Button from './Button';


  class Clock extends React.Component {

    // locale k state a niye, handleClick a click kore kisu operation krte chaile...
    state = { date: new Date(), locale: 'bn-BD' };  // by default, locale -> 'bn-BD'

    // componentDidMount React Class Component er akta Life Cycle Hook/Event
    componentDidMount() {
      this.clockTimer = setInterval( () => this.tick(), 1000);   // 1000 miliseconds i.e. 1 second
    }

    // BUT, ei j timer on krlm, jokhn amra scroll kore chole jabo, i mean watch amdr chokh er samne thakbe na, tokhn o timer on thakbe! but it MUST BE STOPPED then!

    componentWillUnmount() {
      clearInterval(this.clockTimer);
    }    
 
    tick() {
      {
        this.setState({   // Component er state change kore react k reactive krar code..
          date: new Date(), // this.state.date = new Date(); <- NEVER DO IT
        });
      }
    }
    
    // first way
    // handleClick() {  // to solve THIS problem, we need to replace it with ARROW ...
    // handleClick = () => { // ... function; BUT jodi parameter pass krte hy
    handleClick = (locale) => { // arrow function na dle re-render hbe, whics is BAD!
    /* handleClick(e) { V.V.I. (ei function er ei preventDefault part ta)
      e.preventDefault(); // submit button hoile, r link false hoile, oi page a jawa prevent kre; such ase "return: false" in html button */
      // console.log('the button was clicked');
      this.setState({
        // locale: 'en-US',  // don't use semicolon! it's not the end of a line../
        // locale: locale,  // nicher line r ei line SAME
        locale, // uporer line r ei line SAME
      }); // ... it's the end of the above line (just indentation)
    }
        
    render() {
      console.log('Clock component rendered');
      
      // destructuring
      const { date, locale } = this.state;
      
      return (
        <div>
          <h1 className="heading">
            <span className="text">{ date.toLocaleTimeString(locale) }</span>
          </h1>
          {/* <button type='button' onClick={this.handleClick}>Click Here</button> */}
          {/* Parameter pass krle, below code */}
          {/* <button type='button' onClick={this.handleClick.bind(this, 'en-US')}>Click Here</button> */}
          {/* jodi bind use na krte chai, below code */}
          <Button change={this.handleClick} locale='en-US'>
            Click Here
          </Button>
          {/* eikhane, this.handleClick is a function_reference; amra jokhn e amn kono function_reference pathabo, tokhn sudhu function_reference e pathabo, er vitore parameter (eivabe -> this.handleClick('en-US') ) driectly pass krbo na! */}
          {/* eikhane, arrow function ta onClick a call hbe i.e. button a click krar pore, then this.handleClick('en-US') function ta return hbe! */}
        </div>
      );
      // this.handleClick; handleClick holo class er method, tai 'this' dewa MANDATORY; besides, html a, onclick a shob small letter hy, react a camelCase hy; html a function string er mddhe lekha hy, react a dynamically curly braces er vitor lekha hy

      // this CONFUSION
      // this.handleClick; eita page load howar sathe sathe call hosse NAA! eikhan thk function er reference gece, ja button a click krle then call hbe! so, it's a callback function! **..
    }
  }

  export default Clock;