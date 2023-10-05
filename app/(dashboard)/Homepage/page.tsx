'use client'
import Button from '@/app/components/Button'
import React,{useEffect,useState} from 'react'
import NewLink from '../NewLink'
import Image from 'next/image'
import IllustrationEmpty from '../IllustrationEmpty'
import { useGlobalContext } from '../(context)/store'

const Homepage = () => {

  const {links,setlinks} = useGlobalContext();
  const addNewLink = (e: { preventDefault: () => void }) => { 

    setlinks([...links,{
   
      link:'New Item'
    }])
  }
  const deleteLink = (i:number) => {
    let linkCopy = [...links];
    linkCopy.splice(i,1);
    setlinks(linkCopy)
  }
  console.log(links)
  return (
    <div className='flex justify-center items-center'>
      <div className='hidden md:flex w-[560px]'>
        <div className='p-8'>
        <Image
                src={'/images/illustration-phone-mockup.svg'}
                height={300}
                width={300}
                alt=''
            />
        </div>
        </div>
        <div className='flex flex-col justify-center w-full'>
      <div className='flex flex-col mt-8 mb-8'>
      <h1 className='flex text-[24px] font-[700] '>Customize your links</h1>
      <p className='text-grey text-[16px] font-[400]'>Add/edit/remove links below and then share all your profiles with the world!</p>
      </div>
      <div className='flex mt-8 mb-8'>
      <Button
        text='+ Add new Link'
        textColor='text-purple'
        onClick={addNewLink}
        color='bg-white'
        disabled={false}
      />
      </div>
      {links.length===0 &&<div>
        <IllustrationEmpty/>
      </div>}
      { links.length !==0  && <div>
        {links.map((link,index)=>{
            return (
              <div key={index}>
                  <NewLink id={index} deleteLink={()=>deleteLink(index)}/>
                </div>
            )
        })}
      </div>}
    </div>
    </div>
   
  )
}

export default Homepage