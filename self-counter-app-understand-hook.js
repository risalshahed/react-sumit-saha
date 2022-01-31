import React, { useState } from 'react';

function App() {
  const[count, setCount] = useState(13);

  function increment() {
    setCount(nextCount => nextCount + 1);
  }

  function decrement() {
    setCount(nextCount => nextCount - 1);
  }

  return(
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
