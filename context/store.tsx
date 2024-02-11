"use client";
import {
  createContext,
  useContext,
  SetStateAction,
  Dispatch,
  useState,
} from "react";


interface ContextProps {
  item: string;
  setItem: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
  item: "",
  setItem: (): string => "",
});

export const GlobalContextProvider = ({ children }: any) => {
  const [item, setItem] = useState("");

  return (
    <GlobalContext.Provider value={{ item, setItem }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
