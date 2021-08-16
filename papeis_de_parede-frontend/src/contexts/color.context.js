import React, {createContext, useContext, useEffect} from 'react';
import { useColor } from 'react-color-palette';

const Context = createContext({});

export const useColorContext = () => useContext(Context);

export function ColorContextProvider({ children }) {
  const [color, setColor] = useColor("hex", "#121212");

  return (
    <Context.Provider value={{color, setColor}}>
      {children}
    </Context.Provider>
  );
}
