'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from "react";
export const GlobalContextProvider = ({children}:{children:React.ReactNode}) => {
  const [links, setLinks] = useState<{ title: string; url: string; userId: string }[]>([])
  const [showLinks, setShowLinks] = useState<boolean>(true)
  const [userId, setUserId] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [url, setUrl] = useState<string>('')

  
  return (
    <GlobalContext.Provider value={{links, setLinks, showLinks, setShowLinks, userId, setUserId, title, setTitle, url, setUrl}}>
      {children}
    </GlobalContext.Provider>
  )
}

const GlobalContext = createContext<ContextProps>({
  links:[],
  showLinks:true,
  userId:'',
  title:'',
  url:'',
  setUserId:():string=>'',
  setTitle:():string=>'',
  setUrl:():string=>'',
  setShowLinks:():boolean=>true,
  setLinks:():[]=>[]
})

interface ContextProps {
  links: { title: string; url: string; userId: string }[]
  setLinks: Dispatch<SetStateAction<{ title: string; url: string; userId: string}[]>>
  showLinks: boolean
  setShowLinks: Dispatch<SetStateAction<boolean>>
  userId: string
  setUserId: Dispatch<SetStateAction<string>>
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  url: string
  setUrl: Dispatch<SetStateAction<string>>
}

export const useGlobalContext = () => useContext(GlobalContext);