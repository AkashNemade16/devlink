'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState} from "react";
export const GlobalContextProvider = ({children}:{children:React.ReactNode}) => {
  const [links, setLinks] = useState<{ type: string; url: string; id:string}[]>([])
  const [userId, setUserId] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [id, setId] = useState<string>('')

  return (
    <GlobalContext.Provider value={{links, setLinks,userId, setUserId, type, setType, url, setUrl, id,setId}}>
      {children}
    </GlobalContext.Provider>
  )
}

const GlobalContext = createContext<ContextProps>({
  links:[],
  userId:'',
  type:'',
  url:'',
  id:'',
  setId:():string=>'',
  setUserId:():string=>'',
  setType:():string=>'',
  setUrl:():string=>'',
  setLinks:():[]=>[]
})

interface ContextProps {
  links: { type: string; url: string; id:string }[]
  setLinks: Dispatch<SetStateAction<{ type: string; url: string; id:string}[]>>
  userId: string
  setUserId: Dispatch<SetStateAction<string>>
  type: string
  setType: Dispatch<SetStateAction<string>>
  url: string
  setUrl: Dispatch<SetStateAction<string>>
  id: string
  setId: Dispatch<SetStateAction<string>>
}

export const useGlobalContext = () => useContext(GlobalContext);