'use client';
import React from 'react'
import IllustrationEmpty from '../IllustrationEmpty';
import Illustrationphone from '../svg/Illustrationphone';
import { useGlobalContext } from "../(context)/store";

const Profile = () => {
  const { links } = useGlobalContext();
  return (
    <div className="flex justify-center items-center">
      <div className="hidden md:flex w-[560px]">
        <div className="p-8">
          <Illustrationphone />
        </div>
      </div>
      <div className="flex flex-col justify-center w-full">
        
       
      </div>
    </div>
  )
}

export default Profile