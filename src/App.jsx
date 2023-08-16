import { useState } from 'react';
import { ReactComponent as UkraineMap } from './assets/ua.svg';
import './App.css'

function App() {
  const [color, setColor] = useState('#663399');

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
      <input value={color} type='color' onChange={({ target }) => setColor(target.value)} />
      <p className='text'>
        anton.korniievskyi
      </p>
    </section>
  );
}

export default App;
