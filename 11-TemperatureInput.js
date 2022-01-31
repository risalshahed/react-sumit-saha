import React from 'react';

// jehetu amra akta <fieldset> i.e. 1ta input area diya 2ta (aro beshi o hoite pare) nibo (celsius & farenheit); so amdr k variables niye seita <legend> tag er mddhe nite hbe
const scaleNames = {
  c: 'Celsius',
  f: 'Farenheit',
}
// btw, scaleNames is a object

// jehetu, amra 2ta component banassi, one is celsius & other is farenheit; so amra calculator a na kore input component alada file a (this file, TemperatureInput.js) nissi; jno Calculator.js file ta soto thake.

// here, proti ta input area nijer state manage krbe, r state manage krbe so eita o akta class component nibo

// export default class TemperatureInput extends React.Component {
// class component na rekhe functional component a convert krteci!

export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
  /* state = {
    temperature: '',
  };

  onTemperatureChange = (e) => {
    this.setState({
      temperature: e.target.value,
    });
  } */
  // akhn sbkisui props thk asbe, konokisui state thk asbe na!

  // render() {  // class component a, render() akta JSX return kre
    // const{ temperature } = this.state;

    // temperature r state hishebe na, props hishabe nibo, BUT WHY?????!!!
    
    // calculator.js (another component) thk pathano data ei component receive krtece, r onno component thk pathano data receive kra hy props akare, maybe for this reason, eikhane amra temparauture k state hishabe na dhoira props hishabe dhorteci

    // const{ temperature, scale, onTemperatureChange } = this.props; ei destructuring ta functional component er khetre akbare function er parameter/arguments hishabe nilei hya jay

    return(
      <div>
        <fieldset>
          {/* ami kon scale a mapte chai, seita amk props akare rcv krte hbe! */}
          <legend>Enter Temperature in {scaleNames[scale]}:</legend>
          <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e, scale)} />
        </fieldset> {/* props thk ashle this lage na, state thk ashle required! */}
        {/* BoilingVerdict akta prop rcv krbe, which is celsius from BoilingVerdict.js file */}
        
      </div>
    );
  // }
}