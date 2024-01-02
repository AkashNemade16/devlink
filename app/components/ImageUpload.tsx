import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import supabase from '@/utils/supabaseClient';
import { useGlobalContext } from "../(context)/store";
import Image from 'next/image';
import local from 'next/font/local';

function ImageUpload() {
  const [isHovering, setIsHovered] = useState(false);
  const [images, setImages] = useState<any>([]);
  const [uploaded,setUploaded] = useState<Boolean>(false);
  const {userId, setUserProfile } = useGlobalContext();
  const [imageUploaded,setImageUploaded] = useState<Boolean>(false);

  const onChange = (imageList: any) => {
    setImages(imageList);
  }
  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const el = document.getElementById('my-element');
    if (el) {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        el.removeEventListener('mouseenter', handleMouseEnter);  
        el.removeEventListener('mouseleave', handleMouseLeave);
      }
    }
  }, []);

  useEffect(() => {
    const getUploadedImage =  () => {
        if (images.length > 0) {
            const { data: { publicUrl } } = supabase.storage.from("UserProfiles").getPublicUrl(`${userId}/${images[0].file.name}`);
            const url = localStorage.setItem('userProfile', publicUrl);
            setUploaded(false);
            // setUserProfile(url);
        }
    };
    const onUpload = async() => {
      if (images.length > 0) {
        const { data, error } = await supabase.storage
          .from('UserProfiles').upload(`${userId}/${images[0].file.name}`, images[0].file, {
                      upsert: true,
                    })
                    setUploaded(true);
                    setImageUploaded(false);
        if (error) throw error;
      }
      console.log("uploaded")
    }
    if(uploaded){
      getUploadedImage();
    }
    if(images.length>0 && imageUploaded){
      onUpload();
    }
  },[imageUploaded, images, setUserProfile, uploaded, userId])
 
  return (
    <ImageUploading
      value={images}
      onChange={onChange}
      dataURLKey="data_url" 
    >
      {({ imageList, onImageUpload }) => (
        <div id='my-element' className={`flex relative items-center justify-center bg-lightPurple`}>
          {imageList[0]?.data_url?<div className={`flex ${isHovering?'hover:opacity-30':''} justify-center items-center`}>
          <Image  
            className={`${isHovering?'opacity:30':''}`}
            layout="fill"
              objectFit="cover"
              src={imageList[0]?.data_url} alt={"storage"} 
              />
          </div>:null}
              <div className='flex justify-center items-center'>
            <button onClick={()=>{
              onImageUpload();
              setImageUploaded(true);
            }} className={`flex w-full justify-center flex-col items-center pt-[60px] pb-[60px] pr-[38px] pl-[38px]`}>
            <Image
            className={`${imageList[0] && isHovering?'filter invert':''}`}
            width={50}
            height={50}
              src={'/images/icon-upload-image.svg'}
              alt={"upload"}
            />
            <p className={`${imageList[0] && isHovering?'invert':'text-purple'}`}>{imageList[0]?'+ Change Image':'Upload Image'}</p>
            </button>
            </div>
        </div>
      )}
    </ImageUploading>
  );
}

export default ImageUpload;