import React, { useState, useEffect, use } from 'react';
import ImageUploading from 'react-images-uploading';
import supabase from '@/utils/supabaseClient';
import { useGlobalContext } from "../(dashboard)/(context)/store";
import Image from 'next/image';

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
            setUploaded(false);
            setUserProfile(publicUrl);
            localStorage.setItem('publicUrl',publicUrl);
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
        <div id='my-element' className={`flex items-center justify-center bg-lightPurple ${isHovering?'bg-tranparent':''}`}>
          {imageList && !isHovering ?<Image className={`${isHovering?'opacity':''}`} src={imageList[0]?.data_url} width={150} height={150} alt={"storage"} />:<div className='flex justify-center items-center'>
            <button onClick={()=>{
              onImageUpload();
              setImageUploaded(true);
            }} className={`flex w-full justify-center flex-col items-center pt-[60px] pb-[60px] pr-[38px] pl-[38px]`}>
            <Image
            className={`${isHovering ? 'animate-bounce opacity-20' : ''}`}
              src={'/images/icon-upload-image.svg'}
              width={50}
              height={50}
              alt={"upload"}
            />
            <p className='text-purple'>+ Upload Image</p>
            </button>
            </div>}
        </div>
      )}
    </ImageUploading>
  );
}

export default ImageUpload;