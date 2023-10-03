import React from 'react'
import Image from 'next/image'

const DashHeader = () => {
  return (
    <div className='flex items-center justify-between w-full mt-2 mb-2'>
        <div className='flex flex-row '>
            <Image
                src={'images/logo-devlinks-small.svg'}
                width={30}
                height={30}
                alt='icon'
            />
            <div className='hidden sm:flex'>
                devLinks 
            </div>
        </div>
        
        <div className='flex'>
            <button className='flex '>
            <Image
                src={'images/icon-links-header.svg'}
                height={30}
                width={30}
                alt='icon'
            />
            <div className='hidden md:flex'>
            Links
            </div>
         
            </button>
        </div>

        <div className='flex'>
            <button className='flex'>
                <Image
                    src={'images/icon-profile-details-header.svg'}
                    height={30}
                    width={30}
                    alt='icon'
                />
                <div className='hidden md:flex'>
                profile details
                </div>
            </button>
           
        </div>
        <div className='flex border-2 border-purple rounded-md'>
            <button className='flex'>
                <Image
                    className='md:hidden m-1'
                    src={'images/icon-preview-header.svg'}
                    height={30}
                    width={30}
                    alt='icon'
                />
                <div className='hidden md:flex text-purple'>
                    preview
                </div>
            </button>
       
        </div>

    </div>
  )
}

export default DashHeader