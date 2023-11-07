import React from 'react'
import Link from 'next/link'

const Preview = () => {
  return (
    <div className='sm:hidden md:flex flex-col w-full md:h-[357px] md:bg-purple md:rounded-l-2xl md:rounded-r-2xl'>
      <div className='hidden md:flex md:h-[30px] md:bg-purple'>
      </div>
      <div className='flex w-full bg-white h-[70px]'>
        <div className='flex flex-row w-full justify-between mt-2 mb-2'>
        <div className="flex w-full items-center justify-center border-2 border-purple rounded-md p-3 mr-1">
                <Link href={'/Preview'}>
                    <div className="flex text-purple">Back to Editor</div>
                </Link>
            </div>
            <div className="flex items-center justify-center border-2 border-purple bg-purple rounded-md p-3 w-full ml-1">
                <Link href={'/Preview'} className="flex">
                    <div className="text-white">Share Link</div>
                </Link>
            </div>
        </div>
      </div>
      <div className='flex'>
        

      </div>
    </div>
  )
}

export default Preview