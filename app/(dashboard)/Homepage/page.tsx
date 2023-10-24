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
  const { links, setLinks, id, setId } = useGlobalContext();

  useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser();
      console.log("user", user);
      setUserId(user?.data?.user?.id);
    };

    const getData = async () => {
      const { data, error } = await supabase.from("links").select();
      if (error) throw error;
      console.log(data, "getData");
      const destructuredData = data.map((item) => {
        setId(item.id);
        return item.devlinkdata;
      });
      setLinks(destructuredData[0]);
    };
    getUser();
    getData();
  }, [setId, setLinks]);
  const addNewLink = () => {
    if (userId) {
      setLinks([
        ...links,
        {
          type: "",
          url: "",
        },
      ]);
    }
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="308"
            height="632"
            fill="none"
            viewBox="0 0 308 632"
          >
            <path
              stroke="#737373"
              d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
            />
            <path
              fill="#fff"
              stroke="#737373"
              d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
            />
            {/* <circle cx="153.5" cy="112" r="48" fill="#EEE" />
            <rect width="160" height="16" x="73.5" y="185" fill="#EEE" rx="8" />
            <rect width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4" />
            <rect width="237" height="44" x="35" y="278" fill="#EEE" rx="8" />
            <rect width="237" height="44" x="35" y="342" fill="#EEE" rx="8" />
            <rect width="237" height="44" x="35" y="406" fill="#EEE" rx="8" />
            <rect width="237" height="44" x="35" y="470" fill="#EEE" rx="8" />
            <rect width="237" height="44" x="35" y="534" fill="#EEE" rx="8" /> */}
          </svg>
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
        {links.length === 0 && (
          <div>
            <IllustrationEmpty />
          </div>
        )}
        <div>
          {links && (
            <div>
              {links.map((item, index: number) => {
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
