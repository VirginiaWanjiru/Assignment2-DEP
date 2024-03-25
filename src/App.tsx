// App.tsx
import React from 'react';
import CounterDisplay from './components/CounterDisplay';
import CounterButton from './components/CounterButton';

import CounterContext from './components/CounterContext';

const App: React.FC = () => {
  return (
    <CounterProvider>
      <div>
        <h1>Counter App</h1>
        <CounterDisplay />
        <CounterButton />
      </div>
    </CounterProvider>
  );
};

export default App;
