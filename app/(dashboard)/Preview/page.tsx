'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useGlobalContext } from '../(context)/store'

const Preview = () => {
  const { firstName, lastName ,email } = useGlobalContext();
  const url = localStorage.getItem('publicUrl');
  
  return (
    <div className='relative sm:hidden md:flex flex-col w-full md:h-[357px] md:bg-purple md:rounded-l-2xl md:rounded-r-2xl'>
      <div className='hidden md:flex md:h-[30px] md:bg-purple'>
      </div>
      <div className='flex w-full bg-white h-[70px]'>
        <div className='flex flex-row w-full justify-between mt-2 mb-2'>
        <div className="flex w-full items-center justify-center border-2 border-purple rounded-md p-3 mr-1">
                <Link href={'/Profile'}>
                    <div className="flex text-purple">Back to Editor</div>
                </Link>
            </div>
            <div className="flex items-center justify-center border-2 border-purple bg-purple rounded-md p-3 w-full ml-1">
                <Link href={'/'} className="flex">
                    <div className="text-white">Share Link</div>
                </Link>
            </div>
        </div>
      </div>
      <div className='flex w-full justify-center md:h-full'>
      <div className='flex mt-[100px] justify-center rounded-2xl bg-white w-[349px]'>
          <div className='flex flex-col items-center justify-center p-3'>
            <div className='flex items-center rounded-full overflow-hidden w-[96px] h-[96px] justify-center'>
             <Image className='rounded-full' src={url||''} width={'100'} height={'100'} alt="" />
            </div>
            <div className='flex'>
                <p className='text-xl'>{firstName}</p>
                <p className='text-xl'>{lastName}</p>
             </div>
             <div className='flex'>
                <p className='text-lg text-grey'>{email}</p>
             </div>
          </div>
      </div>
      </div>
      
    </div>
  )
}

export default Preview