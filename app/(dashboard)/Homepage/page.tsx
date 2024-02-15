"use client";
import Button from "@/app/components/Button";
import React,{use, useEffect, useState} from "react";
import NewLink from "../NewLink";
import Illustrationphone from "../svg/Illustrationphone";
import IllustrationEmpty from "../IllustrationEmpty";
import { useGlobalContext } from "../../(context)/store";
import { DragDropContext,Droppable,Draggable } from "react-beautiful-dnd";
const Homepage = () => {
  const { links, setLinks } = useGlobalContext();
  const [linkposition, setLinkposition] = useState(links)
  
  useEffect(() => {
    console.log('triggered')
    setLinkposition(links)
  }, [links]);

  const handleOnDragEnd = (result:any) => {
    if(!result.destination) return;
    const items = Array.from(linkposition);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setLinkposition(items);
    console.log(result)
  }
  console.log(linkposition,'linkposition')
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
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="dragLinks">
              {(provided)=>(
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {linkposition?.map((item, index: number) => {

                return  (
                  <Draggable key={index} draggableId={item.type} index={index}>
                    {(provided)=>(
                  <div className="link" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} key={index}>
                      <div>
                      <NewLink
                        linkError={item.err} 
                        linkTitle={item.type}
                        linkUrl={item.url}
                        index={index}
                        deleteLink={() => deleteLink(index)}
                      />
                      </div>
                  </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
              )}
            </Droppable>
            </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
