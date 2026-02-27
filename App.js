import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter App</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>
        Decrease
      </button>
      <button onClick={() => setCount(0)}>Reset</button>

      {count > 10 && <p>🔥 You crossed 10!</p>}
    </div>
  );
}

export default App;