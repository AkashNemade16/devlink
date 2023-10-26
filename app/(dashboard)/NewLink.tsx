"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useGlobalContext } from "./(context)/store";

interface NewLinkProps {
  deleteLink: () => void;
  index: number;
  linkTitle: string;
  linkUrl: string;
}

const NewLink = ({ deleteLink, index, linkTitle, linkUrl }: NewLinkProps) => {
  const [inputlink, setInputLink] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const { setLinks, isError, setIsError } = useGlobalContext();
  const outerdivRef = useRef<HTMLDivElement>(null);
  console.log("iserror", isError);
  const inputFocus = () => {
    checkError();
    if (isError) {
      outerdivRef.current?.classList.add("border-red");
    }
  };
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
    "freecodecamp",
  ];

  useEffect(() => {
    const updateLinks = () => {
      setLinks((prevLinks) =>
        prevLinks.map((item, i) => {
          if (index === i) {
            item.type = selected;
            item.url = inputlink;
          }
          return item;
        })
      );
    };

    if (inputlink !== "" || selected !== "") {
      updateLinks();
    }
  }, [inputlink, selected, setLinks, index]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLink(e.target.value);
  };

  const checkError = () => {
    const urlRegex =
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;
    if (
      inputlink === "" ||
      (!inputlink.includes(selected.toLowerCase()) &&
        !inputlink.includes(selected))
    ) {
      setIsError(true);
    } else if (urlRegex.test(inputlink) === false) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

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
            <select
              className="text-darkgrey bg-lightGrey w-full focus:outline-none"
              value={selected || linkTitle}
              onChange={(e) => {
                setSelected(e.target.value);
              }}
            >
              <option value="">{}</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        }
      </div>
      <div className="flex mt-5 w-full flex-col">
        <p className="text-darkgrey text-[12px] font-[400]">Link</p>
        <div
          ref={outerdivRef}
          className={`flex flex-col w-full border-2  border-borders rounded-md`}
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
                onFocus={inputFocus}
                value={inputlink || linkUrl}
                onChange={handleChange}
                className="text-darkgrey bg-lightGrey w-full focus:outline-none"
                type="text"
                placeholder="www.github.com"
              />
              <div className="flex w-full justify-end items-center">
                {/* {isError?<p className="text-xs text-red p-2">{error}</p>:null} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLink;
