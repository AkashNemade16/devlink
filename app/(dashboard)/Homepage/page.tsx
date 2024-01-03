"use client";
import Button from "@/app/components/Button";
import React from "react";
import NewLink from "../NewLink";
import Illustrationphone from "../svg/Illustrationphone";
import IllustrationEmpty from "../IllustrationEmpty";
import { useGlobalContext } from "../../(context)/store";
const Homepage = () => {
  const { links, setLinks } = useGlobalContext();

  const addNewLink = () => {
    setLinks((prevLinks) => [
      ...prevLinks,
      {
        type: "",
        url: "",
        err: "",
        imageUrl: "",
      },
    ]);
  };

  const deleteLink = (i: number) => {
    let copytask = [...links];
    copytask.splice(i, 1);
    setLinks(copytask);
  };

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
                return (
                  <div key={index}>
                    {item && (
                      <NewLink
                        linkError={item.err} 
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
