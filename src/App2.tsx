import React, { useState } from 'react';

const App2: React.FC = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div>
<br />
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Elementi Gizlət' : 'Elementi Göstər'}
      </button>
      {isVisible && <p>Bu mətn şərt əsasinda görünür!</p>}
    </div>
  );
};

export default App2;