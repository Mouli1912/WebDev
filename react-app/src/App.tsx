

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;