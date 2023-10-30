"use client";
import React,{useState} from "react";
import Button from "../components/Button";
import supabase from "@/utils/supabaseClient";
import { useGlobalContext } from "./(context)/store";

const DashFooter = () => {
  const [error,setError] = useState<Boolean>(false)
  const {links,id, input, type, setErrorMessage, errorMessage} = useGlobalContext();
  const validateUrl = () => { 
    if(input===""){
    setErrorMessage("Please enter a url")
    }
    let typeArray = []
    typeArray.push(type)
    const validate = input.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/g)
    const accepted = typeArray.some(item=>input.includes(item.toLowerCase()) || input.includes(item))
    const res = (validate && accepted) ? true : false
    console.log('res',res)
    if(res){
      setErrorMessage("")
    }else{
      setErrorMessage("Please enter a valid url")
    }
    setError(!res) 
  }

  const updateLinks = () => { 
    links.map((item, i) => {
      item.err = errorMessage;
    })
  }

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
    validateUrl()
    updateLinks()
  };
  
  return (
    <div className="w-full flex flex-col border-t-2 border-greyShade mt-2 mb-2 md:items-end">
      <div className="mt-3 border-lightPurple md:w-[91px]">
        <Button
          text="Save"
          onClick={() => {
            handleSubmit()
          }}
          color={`${links?.length===0?"bg-purple opacity-50":"bg-purple"}`}
          textColor="text-white"
          disabled={links?.length===0?true:false}
        />
      </div>
    </div>
  );
};

export default DashFooter;
