'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState} from "react";
export const GlobalContextProvider = ({children}:{children:React.ReactNode}) => {
  const [links, setLinks] = useState<{ type: string; url: string}[]>([])
  const [userId, setUserId] = useState<string>('')
  const [id, setId] = useState<number>(0)

  return (
    <GlobalContext.Provider value={{links, setLinks, userId, setUserId, id, setId}}>
      {children}
    </GlobalContext.Provider>
  )
}

interface ContextProps {
  links: { type: string; url: string}[]
  id:number
  setId: Dispatch<SetStateAction<number>>
  setLinks: Dispatch<SetStateAction<{ type: string; url: string}[]>>
  userId: string
  setUserId: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
  links:[],
  userId:'',
  id:0,
  setId:():number=>0,
  setUserId:():string=>'',
  setLinks:():[]=>[]
})

interface ContextProps {
  links: { type: string; url: string}[]
  id:number
  setId: Dispatch<SetStateAction<number>>
  setLinks: Dispatch<SetStateAction<{ type: string; url: string}[]>>
  userId: string
  setUserId: Dispatch<SetStateAction<string>>
}

export const useGlobalContext = () => useContext(GlobalContext);