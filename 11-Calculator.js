import React from 'react';
import { convert, toCelsius, toFarenheit } from '../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';


// eikhane amra input box rakhbo, ja akta stateful component, so we use class component as we haven't learned to create stateful component with function yet
export default class Calculator extends React.Component {

  state = {
    temperature: '',
    scale: 'c',
  }

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,  // SIMILAR to -> scale: scale,
    });
  }

  render() {  // class component a, render() akta JSX return kre
    const{ temperature, scale } = this.state;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const farenheit = scale === 'c' ? convert(temperature, toFarenheit) : temperature;
    
    return(
      <div>
        {/* BoilingVerdict akta prop rcv krbe, which is celsius/farenheit from BoilingVerdict.js file */}
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleChange} />
        <TemperatureInput scale="f" temperature={farenheit} onTemperatureChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}