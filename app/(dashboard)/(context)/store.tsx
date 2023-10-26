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
  const [links, setLinks] = useState<{ type: string; url: string }[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

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
        isError,
        setIsError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

interface ContextProps {
  links: { type: string; url: string }[];
  id: number;
  setId: Dispatch<SetStateAction<number>>;
  setLinks: Dispatch<SetStateAction<{ type: string; url: string }[]>>;
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
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
  isError: false,
  setIsError: (): boolean => false,
});

export const useGlobalContext = () => useContext(GlobalContext);
