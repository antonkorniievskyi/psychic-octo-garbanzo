import { useState } from 'react';
import { ReactComponent as UkraineMap } from './assets/ua.svg';
import './index.css'

const presetColors = [
  '#dc0000',
  '#ff5252',
  '#ffcdd2',
  '#663399',
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
    <main className='h-screen'>
      <section className='flex flex-col h-full pt-8'>
        <div className='container mx-auto w-full'>
          <UkraineMap onClick={handleClick} className='w-full stroke-[1.25]' />
        </div>
        <div className='flex justify-between mt-auto px-2'>
          <div className='flex gap-3'>
            {presetColors.map((hexColor) => (
              <button style={{ background: hexColor }} className='h-6 w-6 rounded-full border' key={hexColor} onClick={() => setColor(hexColor)} />
            ))}
          </div>
          <input value={color} type='color' onChange={({ target }) => setColor(target.value)} />
        </div>
        <p className='py-2 text-xs text-center'>anton.korniievskyi</p>
      </section>
    </main>
  );
}

export default App;
