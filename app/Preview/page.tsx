import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Preview = () => {
  return (
    <div className='flex flex-col w-full h-[357px] bg-purple rounded-l-2xl rounded-r-2xl'>
      <div className='flex h-[30px] bg-purple'>
      </div>
      <div className='flex w-full bg-white h-[70px]'>
        <div className='flex flex-row w-full justify-between mt-2 mb-2'>
        <div className="flex items-center border-2 border-purple rounded-md p-3">
                <Link href={'/Preview'}>
                    <Image
                        className="md:hidden m-1"
                        src={"images/icon-preview-header.svg"}
                        height={30}
                        width={30}
                        alt="icon"
                    />
                    <div className="hidden md:flex text-purple">Back to Editor</div>
                </Link>
            </div>
            <div className="flex items-center border-2 border-purple bg-purple rounded-md p-1">
                <Link href={'/Preview'} className="flex">
                    <Image
                        className="md:hidden m-1"
                        src={"images/icon-preview-header.svg"}
                        height={30}
                        width={30}
                        alt="icon"
                    />
                    <div className="text-white">Share Link</div>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Preview