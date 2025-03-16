import React, { useState } from 'react';

const App3: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div >
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)} >Artir</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
    </div>
  );
};

export default App3;