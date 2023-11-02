'use client';
import React from 'react'
import Illustrationphone from '../svg/Illustrationphone';
import { useGlobalContext } from "../(context)/store";
import ImageUpload from '@/app/components/ImageUpload';

const Profile = () => {
  const { links } = useGlobalContext();
  return (
    <div className="flex justify-center items-center bg-lightGrey w-full">
      <div className="hidden md:flex w-[560px] bg-white m-2">
        <div className="p-8">
          <Illustrationphone />
        </div>
      </div>
      <div className="flex flex-col justify-center w-full bg-white m-2">
        <div className='flex w-full flex-col'>
            <h1 className='font-[700] p-2'>Profile Details</h1>
            <p className='text-grey text-sm p-2'>Add your details to create a personal touch to your profile.</p>
        </div>
        <div className='flex bg-lightGrey mt-1'>
          <div className='flex p-3'>
          <p className='text-grey'>Profile Picture</p>
          <div className='flex w-full'>
            <ImageUpload />
          </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Profile