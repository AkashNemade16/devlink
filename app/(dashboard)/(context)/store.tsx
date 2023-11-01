"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [links, setLinks] = useState<{ type: string; url: string; err: string; imageUrl:string }[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [input,setInput] = useState<string>("")
  const [type,setType] = useState<string>("")
  const [errorMessage,setErrorMessage] = useState<string>("")
  const [Error,setError] = useState<Boolean>(false)
  

  return (
    <GlobalContext.Provider
      value={{
        links,
        setLinks,
        userId,
        setUserId,
        id,
        setId,
        email,
        setEmail,
        input,
        setInput,
        type,
        setType,
        errorMessage,
        setErrorMessage,
        Error,
        setError
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

interface ContextProps {
  links: { type: string; url: string; err: string; imageUrl: string }[];
  id: number;
  setId: Dispatch<SetStateAction<number>>;
  setLinks: Dispatch<SetStateAction<{ type: string; url: string; err: string; imageUrl: string }[]>>;
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  input:string;
  setInput:Dispatch<SetStateAction<string>>
  type:string;
  setType:Dispatch<SetStateAction<string>>
  errorMessage:string;
  setErrorMessage:Dispatch<SetStateAction<string>>
  Error:Boolean;
  setError:Dispatch<SetStateAction<Boolean>>
}

const GlobalContext = createContext<ContextProps>({
  links: [],
  userId: "",
  id: 0,
  setId: (): number => 0,
  setUserId: (): string => "",
  setLinks: (): [] => [],
  email: "",
  setEmail: (): string => "",
  input:"",
  setInput:():string=>"",
  type:"",
  setType:():string=>"",
  errorMessage:"",
  setErrorMessage:():string=>"",
  Error:false,
  setError:():Boolean=>false
});

export const useGlobalContext = () => useContext(GlobalContext);
