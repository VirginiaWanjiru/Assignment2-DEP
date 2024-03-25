// CounterContext.tsx
import  { createContext, useState, useContext } from 'react';
import React from "react";
interface CounterContextType {
  count: number;
  increment: () => void;
}

// Creating a context object
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Custom hook to consume the context
export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
type Props={
  children:React.ReactNode;
}

// Context Provider component
const CounterProvider = ({ children }:Props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  

  const value = {
    count,
    increment,
  };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
};

export default {CounterContext, CounterProvider};
