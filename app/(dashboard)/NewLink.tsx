'use client'
import React,{useState} from 'react'
import Image from 'next/image'
const NewLink = () => {
    const [selected,setSelected] = useState('')
    const options = [
        'Codewards',
        'Stackoverflow',
        'FrontendMentor',
        'LinkedIn',
        'Twitter',
        'Hashnode',
        'Youtube',
        'Facebook',
        'Gitlab',
        'Codepen',
        'Twitch',
    ]
  return (
   <div className='flex flex-col bg-lightGrey w-full border-2 rounded-md border-lightGrey'>
    <div className='flex flex-row justify-between w-full'>
        <div className='flex p-2'>
        <Image
        src={'/images/icon-drag-and-drop.svg'}
        height={20}
        width={20}
        alt=''
    />
        </div>
   
    <div>
        <p className='text-grey'>Remove</p>
    </div>
    </div>
    <div className='flex flex-col mt-3'>
        <div className='flex'>
            <p className='text-darkgrey text-[12px] font-[400]'>Platform</p>
        </div>
        {
            <select value={selected} onChange={e=>setSelected(e.target.value)}>
                  <option value=''>Github</option>
                  {options.map(option=>(
                    <option key={option} value={option}>{option}</option>
                  ))}  
            </select>
        }
    </div>
   </div>
  )
}

export default NewLink