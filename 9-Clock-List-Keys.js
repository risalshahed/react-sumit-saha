import React from 'react'; // React.Component dle eita MANDATORY
import Button from './Button';


  class Clock extends React.Component {
    state = { date: new Date(), locale: "bn-BD" };

    // componentDidMount React Class Component er akta Life Cycle Hook/Event
    componentDidMount() {
      this.clockTimer = setInterval( () => this.tick(), 1000);
      // ei tick function (below) ta ei class "Clock" er e akta method, tai eita k jokhn access krte jabo tar agey "this" diye nibo
    }

    componentWillUnmount() {
      clearInterval(this.clockTimer);
    } 

    tick() {
      {
        this.setState({
          date: new Date(),
        });
      }
    }

    handleClick = (locale) => {
      this.setState({
        locale
      });
    }
    
    render() {
      const { date, locale } = this.state;
      
      /* let button;
      if (locale === 'bn-BD') {
        button = (
          <Button change={this.handleClick} locale="en-US">
            Click Here
          </Button>
        );
      } else {
        button = (
          <Button change={this.handleClick} locale="bn-BD">
            Click Here
          </Button>
        );
      } */

      // eivabe na kore, amra jodi RETURN er vitore INLINE a solve krte chai, we may use Ternary Operator; BUT, ak level er beshi hoile, don't user ternary; RATHER use the above conditional if statement or we may utilize SWITCH method of JS

      return (
        <div>
          <h1 className="heading">
            <span className="text">{date.toLocaleTimeString(locale)}</span>
          </h1>
          {locale === 'bn-BD' ? (
            <Button change={this.handleClick} locale="en-US" show={false} enable={false} />
          ) : (
            <Button change={this.handleClick} locale="bn-BD" show enable />
            // show={true} & show is SIMILAR
          )}
        </div>
      );
    }
  }

  export default Clock;