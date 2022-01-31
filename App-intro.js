import Clock from './components/Clock';

function App() {
  console.log('App component rendered');
  return (
    <div><Clock>It's now</Clock></div>
  );  // <Clock locale='bn-BD'> -> here, locale='bn-BD' is "props"
}

// App hoilo, Clock.js er parent file; props change krte pare parent file; e.g. ei App() function a ami jodi locale='en-US' dei, tahole Clock English a dekhabe.

export default App;
