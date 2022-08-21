import React, { createContext, useState } from "react";

const INIT_VALUE = {
  loading: false,
  setLoading: () => {},
  searchText: "",
  setSearchText: () => {},
};

interface GlobalContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<GlobalContextType>(INIT_VALUE);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = (
  props: GlobalProviderProps
) => {
  const [loading, setLoading] = useState(INIT_VALUE.loading);
  const [searchText, setSearchText] = useState(INIT_VALUE.searchText);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,

        searchText,
        setSearchText,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
