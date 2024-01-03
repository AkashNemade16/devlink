"use client";
import React,{useState,useEffect} from "react";
import Button from "../components/Button";
import supabase from "@/utils/supabaseClient";
import { useGlobalContext } from "../(context)/store";

const DashFooter = () => {
  const {links,id, Error, firstName, lastName, images, userId, uploaded} = useGlobalContext();
  const [modal,setModal] = useState<Boolean>(false)
  useEffect(() => {
    if(modal){
      setTimeout(() => {
        setModal(false)
      }, 3000);
    }
  },[modal])
  const handleSubmit =  async () => {
    try {
        if(links.length>0 && id!==undefined){
          const {data} = await supabase.from("links").update({
            devlinkdata:{
              firstName:firstName,
              lastName:lastName,
              link:links
            }
          }).eq('id',id)
          setModal(true)
          console.log(data, "handleSubmit");
        }else{
          const { error } = await supabase.from("links").insert({
            devlinkdata:links
          }).select();
          setModal(true)
          if (error) throw error;
          console.log("handleSubmit");
        }
    } catch (error) {
      console.log(error);
    }
  };
  const imageUpload = async () => {
    try{
        const { data, error } = await supabase.storage
          .from('UserProfiles').upload(`${userId}/${images[0].file.name}`, images[0].file, {
                      upsert: true,
                    })
        if (error) throw error;
      }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div className="w-full flex flex-col border-t-2 border-greyShade mt-2 mb-2 md:items-end">
      {modal &&(<div className="flex w-full flex-row justify-center">
        <p className="text-grey text-[12px] font-[400]">Links saved successfully</p>
      </div>)}
      <div className="mt-3 border-lightPurple md:w-[91px]">
        <Button
          text="Save"
          onClick={() => {
            handleSubmit()
            if(uploaded)imageUpload()
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
