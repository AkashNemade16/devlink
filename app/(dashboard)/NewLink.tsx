"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useGlobalContext } from "./(context)/store";
const NewLink = () => {
const {links,setlinks} = useGlobalContext();
  const [inputlink, setInputLink] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const options = [
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
          <p className="text-grey ml-2">#Link1</p>
        </div>

        <div>
          <button className="text-grey text-[16px]">Remove</button>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <div className="flex">
          <p className="text-darkgrey text-[12px] font-[400]">Platform</p>
        </div>
        {
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Github</option>
            {options.map((option) => (
              <option key={option} value={option}>
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
