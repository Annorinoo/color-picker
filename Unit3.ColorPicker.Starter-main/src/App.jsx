import React, { useState } from 'react';
import './index.css'; // Make sure to import your CSS file if not already done

const Color = ({ color, selectedColor, setSelectedColor }) => {
  const isSelected = selectedColor === color;

  return (
    <div
      className={`${color} ${isSelected ? 'selected' : ''}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
        <div id="colors-list">
        <Color color="red" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="blue" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="green" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

//https://64d58952f7a636119eec7b2c--stunning-torrone-db8fa1.netlify.app

export default App;
