export function toCelsius(farenheit) {
  return ( (farenheit - 32) * 5 ) / 9;
}

export function toFarenheit(celsius) {
  return ( (celsius * 9) / 5 ) + 32;
}

// let's take a common CONVERT function
export function convert(temperature, convertTo) {
  // convertTo er mddhe amra celsius ba farenheit pabo, but HOW???
  const input = parseFloat(temperature);
  if(!Number.isNaN(input)) {
    const output = convertTo(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  } else {
    return '';
  }
}