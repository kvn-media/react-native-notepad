import React, {ReactNode, createContext, useState} from 'react';

export const CounterContex = createContext(null);

export const CounterProvider = ({children}: {children: ReactNode}) => {
  const [count, setCount] = useState<any>([]);

  return (
    <CounterContex.Provider value={{count, setCount}}>
      {children}
    </CounterContex.Provider>
  );
};
