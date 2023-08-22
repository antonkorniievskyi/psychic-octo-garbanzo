import { useState } from 'react';
import { ReactComponent as UkraineMap } from './assets/ua.svg';
import './App.css'

const presetColors = [
  "#dc0000",
  "#ff5252",
  "#ffcdd2",
  "#663399",
]

function App() {
  const [color, setColor] = useState(presetColors[0]);

  const handleClick = ({ target }) => {
    if (target.tagName === 'path') {
      !target.style.fill
        ? target.style.fill = color
        : target.style.fill = '';
    }
  };

  return (
    <section>
      <div>
        <UkraineMap onClick={handleClick} className='map' />
      </div>
      <div className='panel'>
        {presetColors.map((hexColor) => (
          <button style={{ background: hexColor }} className='btn-color' key={hexColor} onClick={() => setColor(hexColor)} />
        ))}
        <input value={color} type='color' onChange={({ target }) => setColor(target.value)} />
      </div>
      <p className='text'>
        anton.korniievskyi
      </p>
    </section>
  );
}

export default App;
