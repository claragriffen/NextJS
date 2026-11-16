'use client';
import { useState } from 'react';

export default function Counter({ step, color }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    const next = count + step;
    setCount(next > 10 ? 0 : next);
  }

  return (
    <div style={{ margin: '1rem' }}>
      <p>Count: {count}</p>
      <button
        onClick={handleClick}
        style={{ backgroundColor: color, padding: '0.5rem 1rem', borderRadius: '6px' }}
      >
        +{step}
      </button>
    </div>
  );
}