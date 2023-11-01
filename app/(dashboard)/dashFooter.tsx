"use client";
import React,{useEffect} from "react";
import Button from "../components/Button";
import supabase from "@/utils/supabaseClient";
import { useGlobalContext } from "./(context)/store";

const DashFooter = () => {
  const {links,id, errorMessage, Error, setLinks} = useGlobalContext();



  const handleSubmit =  async () => {
    try {
        if(links.length>0 && id!==0){
          const {data} = await supabase.from("links").update({
            devlinkdata:links
          }).eq('id',id)
          console.log(data, "handleSubmit");
        }else{
          const { error } = await supabase.from("links").insert({
            devlinkdata:links
          }).select();
          if (error) throw error;
          console.log("handleSubmit");
        }
    } catch (error) {
      console.log(error);
    }
  };
  console.log('errorMessage',errorMessage)
  console.log('error', Error)

  return (
    <div className="w-full flex flex-col border-t-2 border-greyShade mt-2 mb-2 md:items-end">
      <div className="mt-3 border-lightPurple md:w-[91px]">
        <Button
          text="Save"
          onClick={() => {
            handleSubmit()
          }}
          color={`${links?.length===0 || (links.length>0 && Error)?"bg-purple opacity-50":"bg-purple"}`}
          textColor="text-white"
          disabled={links?.length===0 || (links.length>0 && Error)?true:false}
        />
      </div>
    </div>
  );
};

export default DashFooter;
