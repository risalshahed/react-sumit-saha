import React from "react";

// ja (say akta button) barbar use krte hy, ta separate akta component (Button.js) a niye asteci (from clock.js file)

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {  // button component re-render howar thik AAG muhurte ei life_cycle_event ta FIRE hoy! r sheikhane parameter hishebe thake porer bar er (next) prop i.e. nextProp she ki pabe; r 'nextStates' namok arekta paremeter thake, oita bujhay porer state a she ki pabe; so amra this.props diye nextProps er sathe COMPARE krte parbo & code kore TURE or FALSE return krte parbo
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;
    
    // destructure er smy eivabe colon diye rename kra jaay
    if (currentChange === nextChange && currentLocale === nextLocale) {
      return false;
    } else {
      return true;
    }
  }
  render() {  // ei render function akta JSX return krbe
    // console.log('Button component rendered');
    // destructure
    const { change, locale, show, enable } = this.props;
    if(!enable) return null;
    return (
      <>
        <button type='button' onClick={() => change(locale)}>
          {locale === 'bn-BD' ? 'বাংলায় দেখান' : 'Show in English'}
        </button>
        {show && <p>Hello</p>}  {/* show={true} ? print "<p>Hello</p>" : "" */}
      </>
    )
  }
}

export default Button;