"use client";
import Button from "@/app/components/Button";
import React, { useEffect, useState } from "react";
import NewLink from "../NewLink";
import Image from "next/image";
import IllustrationEmpty from "../IllustrationEmpty";
import { useGlobalContext } from "../(context)/store";
import supabase from "@/utils/supabaseClient";

const Homepage = () => {
  const [userId, setUserId] = useState<string>();
  const { url, type,setType,setUrl, links,setLinks, id,setId} = useGlobalContext();

  useEffect(()=>{
    const getUser = async () => {
      const user = await supabase.auth.getUser();
      console.log("user", user);
      setUserId(user?.data?.user?.id);
    };
   
    const getData = async () => { 
      const { data, error } = await supabase.from("links").select();
      if (error) throw error;
      console.log(data, "getData");
      const structuredData = data.map((link,index)=>{
        setType(link.devlinkdata.type)
        setUrl(link.devlinkdata.url)
        setId(link.id)
        return {
          type: link.devlinkdata.type,
          url: link.devlinkdata.url,
          id: link.id
        }
      })
      console.log(structuredData)
      setLinks(structuredData)
    }
    getUser();
    getData()
  },[setLinks, setId, setType, setUrl])


  const addNewLink = () => {
    setUrl("");
    setType("");
    if (userId) {
      setLinks(prevLinks => [...prevLinks, {
        type: type,
        url: url,
        id: id
        }])
    }
  };

  const deleteLink = (i:number) => {
    let copytask = [...links]
    copytask.splice(i,1)
    setLinks(copytask)
  };
  console.log('links',links)
  return (
    <div className="flex justify-center items-center">
      <div className="hidden md:flex w-[560px]">
        <div className="p-8">
          <Image
            src={"/images/illustration-phone-mockup.svg"}
            height={300}
            width={300}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="flex flex-col mt-8 mb-8">
          <h1 className="flex text-[24px] font-[700] ">Customize your links</h1>
          <p className="text-grey text-[16px] font-[400]">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <div className="flex mt-8 mb-8">
          <Button
            text="+ Add new Link"
            textColor="text-purple"
            onClick={addNewLink}
            color="bg-white"
            disabled={false}
          />
        </div>
        { links.length === 0 &&
          <div>
            <IllustrationEmpty />
          </div>
        }
        <div>
          {links && (
            <div>
              {links.map((item, index:number) => {
                return (
                  <div key={index}>
                    {item && (
                      <NewLink
                        linkTitle={item.type}
                        linkUrl={item.url}
                        index={index}
                        deleteLink={() => deleteLink(index)}
                      />
              )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
