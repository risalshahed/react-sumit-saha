import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className='app'>
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <User name="Risal" /> here, prpo was string; below is an arrow function */} 
      {/* <User name = {
        () => "Risal"
      } /> */}
      {/* now let's pass a parameter */}
      {/* <User render = {
        (isLoggedIn) => (isLoggedIn ? "Risal" : "Guest")
      } /> */}

      {/* ClickCounter count value & incremenetCount function expect kre */}
      {/* <Counter render = { (count, incrementCount) => (
        <ClickCounter count={count} incrementCount={incrementCount} />
      )} /> */}

      {/* Another pattern of render prop */}
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>

      {/* HoverCounter count value & incremenetCount function expect kre */}
      {/* <Counter render = { (count, incrementCount) => (
        <HoverCounter count={count} incrementCount={incrementCount} />
      )} /> */}

      {/* Another pattern of render prop */}
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;