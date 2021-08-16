import React, {createContext, useContext, useState} from 'react';
import { useColor } from 'react-color-palette';

const Context = createContext({});

export const useColorContext = () => useContext(Context);

export function ColorContextProvider({ children }) {
  const [color, setColor] = useColor("hex", "#121212");
  const [colorInfo, setColorInfo] = useState([]);

  return (
    <Context.Provider value={{color, setColor, colorInfo, setColorInfo}}>
      {children}
    </Context.Provider>
  );
}
