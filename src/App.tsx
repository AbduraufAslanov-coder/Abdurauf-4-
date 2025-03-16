import React, { useState } from 'react';

 export const App : React.FC = () => {

  const [count, setCount] = useState<number>(0);

 
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Bas{count}</button>
    </div>
  );
};

