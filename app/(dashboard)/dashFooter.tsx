"use client";
import React,{useState,useEffect} from "react";
import Button from "../components/Button";
import { useGlobalContext } from "./(context)/store";
const DashFooter = () => {
  const {title,url,userId,showLinks,setShowLinks,links} = useGlobalContext()
console.log(links)
  return (
    <div className="w-full flex flex-col border-t-2 border-greyShade mt-2 mb-2">
      <div className="mt-3 border-lightPurple">
        <Button
          text="Save"
          onClick={() => {
            console.log("clicked");
          }}
          color={`${showLinks?"bg-purple":"bg-purple opacity-50"}`}
          textColor="text-white"
          disabled={!showLinks}
        />
      </div>
    </div>
  );
};

export default DashFooter;
