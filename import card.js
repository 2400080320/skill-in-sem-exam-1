import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
        <button>Click Me</button>
      </Card>

      <Card>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Example" 
          style={{ width: '100%', borderRadius: '4px' }}
        />
        <p>Image inside another card.</p>
      </Card>
    </div>
  );
};

export default App;