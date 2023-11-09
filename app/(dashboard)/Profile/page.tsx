'use client';
import React from 'react'
import Illustrationphone from '../svg/Illustrationphone';
import { useGlobalContext } from "../(context)/store";
import ImageUpload from '@/app/components/ImageUpload';
import Form from '@/app/components/Form';

const Profile = () => {
  return (
    
<div className="flex justify-center items-center bg-lightGrey m-4 w-full">
      <div className="hidden md:flex w-[560px] bg-white">
        <div className="p-8">
          <Illustrationphone />
        </div>
      </div>
      <div className="flex flex-col justify-center w-full bg-white ">
        <div className='flex w-full flex-col'>
            <h1 className='font-[700]'>Profile Details</h1>
            <p className='text-grey text-sm'>Add your details to create a personal touch to your profile.</p>
        </div>
        <div className='flex bg-lightGrey flex-col w-full mt-1'>
          <div className='flex flex-col w-full p-3'>
          <p className='text-grey'>Profile Picture</p>
          <div className='flex w-full'>
            {/* <ImageUpload /> */}
          </div>
          </div>
        </div>
        <div className='flex bg-lightGrey flex-col w-full mt-1'>
          <div className='flex flex-col w-full p-3'>
          <div className='flex w-full justify-center items-center'>
            <Form />
          </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Profile