import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import { useGlobalContext } from "../(context)/store";
import Image from 'next/image';

function ImageUpload() {
  const [isHovering, setIsHovered] = useState(false);
  const {userId, setUserProfile, uploaded,setUploaded,images,setImages, imageUploaded, setImageUploaded } = useGlobalContext();

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
    const onUpload = () => {
      setUploaded(true);
    }
    if(images.length>0 && imageUploaded){
      onUpload();
    }
  },[imageUploaded, images, setImageUploaded, setUploaded, setUserProfile, uploaded, userId])
 
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