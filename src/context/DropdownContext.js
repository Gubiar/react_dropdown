import React, { createContext, useState } from 'react';

export const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [selected, setSelected] = useState(null);

  return (
    <DropdownContext.Provider value={{ selected, setSelected }}>
      {children}
    </DropdownContext.Provider>
  );
};
