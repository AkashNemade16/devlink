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
  const [lastName,setLastName] = useState<string>("")
  const [firstName,setFirstName] = useState<string>("")
  const [userProfile,setUserProfile] = useState<string>("")
  const [copied, setCopied] = useState<Boolean>(false);
  const [uploaded,setUploaded] = useState<Boolean>(false);
  const [images, setImages] = useState<any>([]);
  const [imageUploaded,setImageUploaded] = useState<Boolean>(false);

  
  useEffect(() => {
    const getSession = async () => {
      const {data,error } = await supabase.auth.getSession();
      setUserSession(data)
    }
    const getUser = async () => {
          const user = await supabase.auth.getUser();
          setUserId(user?.data?.user?.id ?? "");
          setEmail(user?.data?.user?.email ?? "");
        };
    const getData = async () => {
      const { data, error } = await supabase.from("links").select();
      console.log(data, "getData");
      if (error) throw error;
      data.map((item) => {
        setLastName(item.devlinkdata?.lastName);
        setFirstName(item.devlinkdata?.firstName);
      });
      const destructuredData = data.map((item) => {
        setId(item.id);
        return item.devlinkdata?.link;
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
        setUserSession,
        lastName,
        setLastName,
        firstName,
        setFirstName,
        userProfile,
        setUserProfile,
        copied,
        setCopied,
        uploaded,
        setUploaded,
        images,
        setImages,
        imageUploaded,
        setImageUploaded
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
  setUserSession:Dispatch<SetStateAction<any>>;
  lastName:string;
  setLastName:Dispatch<SetStateAction<string>>;
  firstName:string;
  setFirstName:Dispatch<SetStateAction<string>>;
  userProfile:string;
  setUserProfile:Dispatch<SetStateAction<any>>;
  copied:Boolean;
  setCopied:Dispatch<SetStateAction<Boolean>>;
  uploaded:Boolean;
  setUploaded:Dispatch<SetStateAction<Boolean>>;
  images:any;
  setImages:Dispatch<SetStateAction<any>>;
  imageUploaded:Boolean;
  setImageUploaded:Dispatch<SetStateAction<Boolean>>;
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
  setUserSession:():any=>{},
  lastName:"",
  setLastName:():string=>"",
  firstName:"",
  setFirstName:():string=>"",
  userProfile:"",
  setUserProfile:():string=>"",
  copied:false,
  setCopied:():Boolean=>false,
  uploaded:false,
  setUploaded:():Boolean=>false,
  images:[],
  setImages:():any=>{},
  imageUploaded:false,
  setImageUploaded:():Boolean=>false,
});

export const useGlobalContext = () => useContext(GlobalContext);


