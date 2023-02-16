import { createContext, useState } from 'react';

export const BaseContext = createContext([]);

export const ContextProvider = ({ children }) => {
  const [popupIsActive, setPopupIsActive] = useState(false);

  const value = { popupIsActive, setPopupIsActive };
  return <BaseContext.Provider value={value}>{children}</BaseContext.Provider>;
};
