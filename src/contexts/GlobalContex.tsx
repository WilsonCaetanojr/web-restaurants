import React, { createContext, useState } from "react";

const INIT_VALUE = {
  loading: false,
  setLoading: () => {},
};

interface GlobalContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextType>(INIT_VALUE);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = (
  props: GlobalProviderProps
) => {
  const [loading, setLoading] = useState(INIT_VALUE.loading);
  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
