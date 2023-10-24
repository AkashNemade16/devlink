'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState} from "react";
export const GlobalContextProvider = ({children}:{children:React.ReactNode}) => {
  const [links, setLinks] = useState<{ type: string; url: string}[]>([])
  const [userId, setUserId] = useState<string>('')
  const [id, setId] = useState<number>(0)
  const [email,setEmail] =  useState<string>('')

  return (
    <GlobalContext.Provider value={{links, setLinks, userId, setUserId, id, setId, email, setEmail}}>
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
  email: string
  setEmail: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
  links:[],
  userId:'',
  id:0,
  setId:():number=>0,
  setUserId:():string=>'',
  setLinks:():[]=>[],
  email:'',
  setEmail:():string=>''
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