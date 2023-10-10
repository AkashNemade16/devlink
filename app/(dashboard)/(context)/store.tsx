'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
   title:string,
   link?: string,
   platform?:string,
}

interface ContextProps {
    links: DataType[],
    setlinks: Dispatch<SetStateAction<DataType[]>>
}

const GlobalContext = createContext<ContextProps>({
    links: [],
    setlinks: (): DataType[] => [] 
})

export const GlobalContextProvider = ({ children }:{
    children: React.ReactNode;
  }) => {
    const [links, setlinks] = useState<[] | DataType[]>([]);
    
    return (
        <GlobalContext.Provider value={{ links, setlinks }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);