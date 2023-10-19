"use client";
import React,{useState,useEffect} from "react";
import Button from "../components/Button";
import supabase from "@/utils/supabaseClient";
import { useGlobalContext } from "./(context)/store";

const DashFooter = () => {
  const {type,url,userId,links,setLinks,id} = useGlobalContext()
  const getType = links.map((item)=>item.type)
  const getUrl = links.map((item)=>item.url)
  const handleSubmit = async () => {
    try {
        const { data, error } = await supabase.from("links").insert({
          type:getType,
          url:getUrl,
        }).select('*');
        if (error) throw error;
        console.log(data, "handleSubmit");
    } catch (error) {
      console.log(error);
    }
  }
console.log('footer',links,userId,type,url)
  return (
    <div className="w-full flex flex-col border-t-2 border-greyShade mt-2 mb-2">
      <div className="mt-3 border-lightPurple">
        <Button
          text="Save"
          onClick={() => {
            handleSubmit()
          }}
          color={`${links.length===0?"bg-purple opacity-50":"bg-purple"}`}
          textColor="text-white"
          disabled={links.length===0?true:false}
        />
      </div>
    </div>
  );
};

export default DashFooter;
