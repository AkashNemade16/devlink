'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PreviewButton from '@/app/components/PreviewButton'
import { useGlobalContext } from '../(context)/store'
import { selectImages } from '@/common/getImages'

const Preview = () => {
  const { firstName, lastName ,email, links } = useGlobalContext();
  const url = localStorage.getItem('publicUrl');
  const getType = selectImages(links);
  const getColor = () => {  
    const color = links?.map((item) => {
      switch (item.type) {
        case "Github":
          return "githubColor";
        case "Codewars":
          return "codeWarsColor";
        case "Stackoverflow":
          return "stackOverflowColor";
        case "FrontendMentor":
          return "frontEndMentorColor";
        case "LinkedIn":
          return "linkedinColor";
        case "Twitter":
          return "twitterColor";
        case "Hashnode":
          return "hashNodeColor";
        case "Youtube":
          return "youtubeColor";
        case "Facebook":
          return "facebookColor";
        case "Gitlab":
          return "gitLabColor";
        case "Codepen":
          return "codePenColor";
        case "Twitch":
          return "twitchColor";
        case "Freecodecamp":
          return "freeCodeCampColor";
        default:
          return "githubColor";
      }
    });
    return color;
  }
  const getColorType = getColor();
  console.log(email)
  return (
    <div className='flex w-full max-h-screen'>
      <div className='sm:hidden md:flex flex-col w-full md:h-[357px] md:bg-purple md:rounded-l-2xl md:rounded-r-2xl'>
      
      <div className='flex w-full flex-col items-center justify-center'>
      <div className='relative flex w-[95%] top-6 bg-white rounded-xl'>
        <div className='flex flex-row w-full justify-between mt-2 mb-2'>
        <div className="flex items-center justify-center border-2 border-purple rounded-md p-3 ml-2">
                <Link href={'/Profile'}>
                    <div className="flex text-purple">Back to Editor</div>
                </Link>
            </div>
            <div className="flex items-center justify-center border-2 border-purple bg-purple rounded-md p-3 mr-2">
                <Link href={'/'}>
                    <div className="text-white">Share Link</div>
                </Link>
            </div>
        </div>
      </div>
      <div className='flex mt-[100px] justify-center rounded-2xl bg-white w-[349px]'>
          <div className='flex flex-col items-center justify-center h-full p-3'>
            <div className='flex items-center rounded-full overflow-hidden w-[96px] h-[96px] justify-center'>
             <Image className='rounded-full h-full' src={url||''} width={'100'} height={'100'} alt=""/>
            </div>
            <div className='flex'>
                <p className='text-xl'>{firstName}</p>
                <p className='text-xl'>{lastName}</p>
             </div>
             <div className='flex'>
                <p className='text-lg text-grey'>{email}</p>
             </div>
             <div className='flex flex-col'>
                {
                  links?.map((item, index) => {
                    return (
                      <div className='flex' key={index}>
                        <PreviewButton
                          color={getColorType[index]}
                          imageUrl={getType ? getType[index] : ''}
                          type={item.type}
                          input={item.url}
                        />
                      </div>
                    );
                  })
            }
             </div>
             
          </div>
      </div>
      </div>
      
    </div>
    </div>
    
  )
}

export default Preview