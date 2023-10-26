"use client";
import Button from "@/app/components/Button";
import React, { useEffect } from "react";
import NewLink from "../NewLink";
import Illustrationphone from "../svg/Illustrationphone";
import IllustrationEmpty from "../IllustrationEmpty";
import { useGlobalContext } from "../(context)/store";
import supabase from "@/utils/supabaseClient";
const Homepage = () => {
  const { links, setLinks, setId, userId, setUserId, setEmail } =
    useGlobalContext();

  useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser();
      console.log("user", user);
      setUserId(user?.data?.user?.id ?? "");
      setEmail(user?.data?.user?.email ?? "");
    };

    const getData = async () => {
      const { data, error } = await supabase.from("links").select();
      if (error) throw error;
      console.log(data, "getData");
      const destructuredData = data.map((item) => {
        setId(item.id);
        return item.devlinkdata;
      });
      if(destructuredData.length>0){
        setLinks(destructuredData[0]);
      }else{
        setLinks([]);
      }
    
    };
    getUser();
    getData();
  }, [setId, setLinks, setUserId, setEmail]);
  const addNewLink = () => {
      setLinks([
        ...links,
        {
          type: "",
          url: "",
        },
      ]);
    
  };

  const deleteLink = (i: number) => {
    let copytask = [...links];
    copytask.splice(i, 1);
    setLinks(copytask);
  };
  console.log("links", links);
  return (
    <div className="flex justify-center items-center">
      <div className="hidden md:flex w-[560px]">
        <div className="p-8">
          <Illustrationphone />
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
        {links?.length === 0 && (
          <div>
            <IllustrationEmpty />
          </div>
        )}
        <div>
            <div>
              {links?.map((item, index: number) => {
                console.log(item);
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

        </div>
      </div>
    </div>
  );
};

export default Homepage;
