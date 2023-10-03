'use client'
import Button from '@/app/components/Button'
import React,{useState} from 'react'
import NewLink from '../NewLink'
import Image from 'next/image'
const Homepage = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col mt-8 mb-8'>
      <h1 className='flex text-[24px] font-[700] '>Customize your links</h1>
      <p className='text-grey text-[16px] font-[400]'>Add/edit/remove links below and then share all your profiles with the world!</p>
      </div>
      <div className='flex mt-8 mb-8'>
      <Button
        text='+ Add new Link'
        textColor='text-purple'
        onClick={()=>{}}
        color='bg-white'
        disabled={false}
      />
      </div>
      <div className='flex h-[377px] bg-lightGrey justify-center'>
        <div className='flex flex-col w-full justify-center items-center p-4'>
          <div className='flex'>
          <Image
          src={'images/illustration-empty.svg'}
          height={100}
          width={100}
          alt='icon'
        />
          </div>
          <div className='flex'>
            <h1 className='text-[24px] font-[700] mt-8 mb-8'>Let’s get you started</h1>
          </div>
          <div className='flex'>
            <p className='text-grey font-[400] text-[16px]'>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage