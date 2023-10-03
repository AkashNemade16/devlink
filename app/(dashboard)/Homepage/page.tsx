'use client'
import Button from '@/app/components/Button'
import React from 'react'

const Homepage = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col mt-4 mb-4'>
      <h1 className='flex text-[24px] font-[700] '>Customize your links</h1>
      <p className='text-grey text-[16px] font-[400]'>Add/edit/remove links below and then share all your profiles with the world!</p>
      </div>
      <div>
      <Button
        text='+ Add new Link'
        textColor='text-purple'
        onClick={()=>{}}
        color='bg-white'
        disabled={false}
      />
      </div>
    </div>
  )
}

export default Homepage