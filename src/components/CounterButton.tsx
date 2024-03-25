// CounterButton.tsx
import React from 'react';
import { useCounter } from './CounterContext';

const CounterButton: React.FC = () => {
  const { increment } = useCounter();

  return (
    <button onClick={increment}>
      Increment
    </button>
  );
};

export default CounterButton;
