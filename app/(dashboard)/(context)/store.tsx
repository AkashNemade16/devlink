"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import supabase from "@/utils/supabaseClient";
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
  const [Error,setError] = useState<Boolean>(false)
  const [usersession,setUserSession] = useState<any>([])
  
  useEffect(() => {
    const getSession = async () => {
      const {data,error } = await supabase.auth.getSession();
      console.log(data, "getSession");
      setUserSession(data)
    }
    const getUser = async () => {
          const user = await supabase.auth.getUser();
          setUserId(user?.data?.user?.id ?? "");
          setEmail(user?.data?.user?.email ?? "");
        };
    const getData = async () => {
      const { data, error } = await supabase.from("links").select();
      if (error) throw error;
      const destructuredData = data.map((item) => {
        setId(item.id);
        return item.devlinkdata;
      });
      if(destructuredData.length>0){
        setLinks(destructuredData[0]);
      }else{
        setLinks([]);
      }
    };
    getUser();
    getData();
    getSession();
  },[])

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
        Error,
        setError,
        usersession,
        setUserSession
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
  Error:Boolean;
  setError:Dispatch<SetStateAction<Boolean>>
  usersession:any;
  setUserSession:Dispatch<SetStateAction<any>>
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
  Error:false,
  setError:():Boolean=>false,
  usersession:[],
  setUserSession:():any=>{}
});

export const useGlobalContext = () => useContext(GlobalContext);
