import {ReactNode, SetStateAction, createContext, useState} from 'react';

import {Dispatch} from 'react';

interface CounterProviderType {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

export const CounterContext = createContext<CounterProviderType>(
  {} as CounterProviderType,
);

const CounterProvider = ({children}: {children: ReactNode}) => {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={{counter, setCounter}}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
