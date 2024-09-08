import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [bgColor, setBgColor] = useState('white'); // Default background color

  const colors = [
    { name: 'Red', code: 'Red' },
    { name: 'Yellow', code: 'Yellow' },
    { name: 'Black', code: 'Black' },
    { name: 'Purple', code: 'Purple' },
    { name: 'Green', code: 'Green' },
    { name: 'Blue', code: 'Blue' },
  ];

  const setDefaultBackground = () => {
    setBgColor('white'); // Set default background color (white)
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor || 'transparent'}}>
      <div className="card">
        
        <div className="buttons">
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color.code, color: '#fff' }}
              onClick={() => setBgColor(color.code)}
            >
              {color.name}
            </button>
          ))}
          <button onClick={setDefaultBackground} style={{ backgroundColor: '#ce3194', color: '#000' }}>Default</button>
        </div>
      </div>
    </div>
  );
}

export default App;
