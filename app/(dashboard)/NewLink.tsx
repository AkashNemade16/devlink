"use client";
import React, { useState,useEffect, useCallback } from "react";
import Image from "next/image";
import { useGlobalContext } from "./(context)/store";
interface NewLinkProps {
    deleteLink:()=>void,
    index:number,
}

const NewLink =({deleteLink,index}:NewLinkProps )=> {
const {setUrl,setTitle} = useGlobalContext();
  const [inputlink, setInputLink] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const options = [
    "Github",
    "Codewards",
    "Stackoverflow",
    "FrontendMentor",
    "LinkedIn",
    "Twitter",
    "Hashnode",
    "Youtube",
    "Facebook",
    "Gitlab",
    "Codepen",
    "Twitch",
  ];

useEffect(()=>{
  if(inputlink!=="" && selected!=="" ){
    setUrl(inputlink)
    setTitle(selected)
  }
},[inputlink, selected, setTitle, setUrl])
  
  return (
    <div className="flex flex-col bg-lightGrey w-full border-2 rounded-md border-lightGrey">
      <div className="flex flex-row justify-between w-full">
        <div className="flex p-2">
          <Image
            src={"/images/icon-drag-and-drop.svg"}
            height={20}
            width={20}
            alt=""
          />
          <p className="text-grey ml-2">{`#Link ${index}`}</p>
        </div>

        <div>
          <button onClick={()=>{
            deleteLink()
          }} className="text-grey text-[16px]">Remove</button>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <div className="flex">
          <p className="text-darkgrey text-[12px] font-[400]">Platform</p>
        </div>
    {
     <select
        value={selected}
        onChange={
            (e) => {
                setSelected(e.target.value)
            }
        }
      >
        <option value=''>{}</option>
        {options.map((option,index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    }
      
      </div>
      <div className="flex mt-5 w-full">
        <div className="flex items-center mr-2">
          <Image src={"images/icon-link.svg"} width={20} height={20} alt="" />
        </div>
        <div className="flex w-full">
          <input
            value={inputlink}
            onChange={(e) => setInputLink(e.target.value)}
            className="text-darkgrey bg-lightGrey w-full focus:outline-none"
            type="text"
            placeholder="www.github.com"
          />
        </div>
      </div>
    </div>
  );
};

export default NewLink;
