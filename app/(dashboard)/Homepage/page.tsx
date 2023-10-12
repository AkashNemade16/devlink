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
  const { url, title,links,setLinks} = useGlobalContext();
  console.log(links)
  useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser();
      console.log("user", user);
      setUserId(user?.data?.user?.id);
    };
    getUser();
  }, []);
  console.log("urltitle", url, title,userId);
  const addNewLink = async () => {
    try {
      setLinks([...links,{
        title:title,
        url:url,
        userId:userId
      }])
       
      if (title && url && userId) {
       
        if (links.length>0) {
          const { data, error } = await supabase.from("links").insert({
            devLinkData:[{
              links
            }]
          }).select();
          if (error) throw error;
          console.log(data, "addNewLink");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLink = (i: number) => {
    let copytask = [...links]
    copytask.splice(i,1)
    setLinks(copytask)
    console.log('hello')
  };

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
              {links.map((item: { title: string; url: string; userId: string; }, index:number) => {
                return (
                  <div key={index}>
                    {item && (
                      <NewLink
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
