// App.tsx
import React from 'react';
import CounterDisplay from './components/CounterDisplay';
import CounterButton from './components/CounterButton';
import Form from './components/Form';
import CounterContext from './components/CounterContext';
import CarTypesList from './components/MapFunction';

const App: React.FC = () => {
  return (
    
    
    
      <div>
        <h1>My  details  App</h1>
        
        <Form/>

        <h1>The Types of Cars I like </h1>
        <CarTypesList />
      </div>
    
  );
};

export default App;
