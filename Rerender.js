import React, { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const noRenderCount = useRef(0);         

  const handleClick = () => {
    setCount(count + 1);       
    noRenderCount.current += 1; 
    console.log("Ref value:", noRenderCount.current);
  };

  return (
    <div>
      <h2>State Count: {count}</h2>
      <h2>Ref Count (no re-render): {noRenderCount.current}</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default App;
