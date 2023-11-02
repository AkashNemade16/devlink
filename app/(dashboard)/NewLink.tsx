"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useGlobalContext } from "./(context)/store";
import Dropdown from "../components/Dropdown";
import { selectImages } from "@/common/getImages";
interface NewLinkProps {
  deleteLink: () => void;
  index: number;
  linkTitle: string;
  linkUrl: string;
  linkError: string;
}
const options = [
  "Github",
  "Codewars",
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
  "Freecodecamp",
];
const NewLink = ({ deleteLink, index, linkUrl, linkError }: NewLinkProps) => {
  const [inputlink, setInputLink] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const { setLinks, setInput, setType, links, setError, Error,  } = useGlobalContext();
  const imageUrls = selectImages(links) || [""];
  const imageUrl = imageUrls[index] || "";
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLink(e.target.value);
    setInput(e.target.value)
  };

  useEffect(() => {
    const validate = () => {
      links.map((item, i) => {
        if(i === index){
          let typeArray = []
          typeArray.push(item.type)
          const validate = item.url.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/)
          const accepted = typeArray.some(input=>item.url.includes(input.toLowerCase()) || item.url.includes(input))
          const res = (validate && accepted) ? true : false
          if(res){
            setErrorMessage("")
            setError(false)
          }else if(item.url===""){
              setErrorMessage("can't be empty")
              setError(true)
          } else{
            setErrorMessage( "Please check the URL")
            setError(true)
          }
        }
      })
    }
    validate()
  },[index, links, setError, inputlink, setErrorMessage, Error])

  useEffect(() => {
    const updateLinks = () => {
      setLinks((prevLinks) =>
        prevLinks.map((item, i) => {
          if (index === i) {
            item.type = selected;
            item.url = inputlink;
            item.imageUrl = imageUrl;
          }
          return item;
        })
      );
    };

    if (inputlink !== "" || selected !== "") {
      updateLinks();
    }
  }, [inputlink, selected, setLinks, index, imageUrl, errorMessage, setErrorMessage]);
  
  return (
    <div className="flex flex-col bg-lightGrey w-full border-2 rounded-md border-lightGrey mt-4">
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
          <button
            onClick={() => {
              deleteLink();
            }}
            className="text-grey text-[16px]"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <div className="flex">
          <p className="text-darkgrey text-[12px] font-[400]">Platform</p>
        </div>
        {
          <div className={`flex w-full border-2 border-borders rounded-md`}>
            <div className="flex w-full">
            <Dropdown selected = {selected} setSelected = {setSelected} index={index}/>
            </div>
          </div>
          
        }
      </div>
      <div className="flex mt-5 w-full flex-col">
        <p className="text-darkgrey text-[12px] font-[400]">Link</p>
        <div
          className={`flex flex-col w-full border-2 ${errorMessage!=='' && Error?'border-red':''}  border-borders rounded-md`}
        >
          <div className="flex w-full">
            <div className="flex items-center mr-2">
              <Image
                src={"images/icon-link.svg"}
                width={20}
                height={20}
                alt="icon-link"
              />
            </div>
            <div className="flex flex-row w-full">
              <input
                value={inputlink || linkUrl}
                onChange={handleChange}
                className="text-darkgrey bg-lightGrey focus:outline-none w-full"
                type="text"
                placeholder="www.github.com"
              />
              <div className="flex w-full justify-end items-center">
                {Error?<p className="text-xs text-red p-2">{errorMessage}</p>:null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLink;
