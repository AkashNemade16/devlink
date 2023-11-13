// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import supabase from "@/utils/supabaseClient";
// import ImageUploading from 'react-images-uploading';
// import { useGlobalContext } from "../(dashboard)/(context)/store";
// const ImageUpload = () => {
//   const [image, setImage] = useState<string | undefined>();
//   const maxNumber = 1;
//   const [storage, setStorage] = useState<any>([]);
//   const { userId, usersession } = useGlobalContext();
//     useEffect(() => {
//         const getUploadedImage =  () => {
//             if (image!==undefined) {
//                 const { data: { publicUrl } } = supabase.storage.from("UserProfiles").getPublicUrl(`${usersession?.session?.user?.id}/${image}`);
//                 console.log(publicUrl, "getUploadedImage");
//                 setStorage(publicUrl);
//             }
//     };
//     getUploadedImage();
// }, [image, userId, usersession]);

//   const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const fileExt = file.name.split(".").pop();
//       const fileName = `${Math.random()}.${fileExt}`;
//       const { data, error } = await supabase.storage
//         .from("UserProfiles")
//         .upload(`${userId}/${fileName}`, file, {
//           upsert: true,
//         });
//         if(error) throw error;;
//       if (data) {
//         setImage(data.path);
//         console.log("upload", data);
//       }
//     }
//   };

//   console.log("image", image)
//   console.log("storage", storage[0]);
//   return (
//     <div className="flex w-full flex-col items-center justify-center">
//       <div className="flex w-full">
        
//       {/* <input type="file" onChange={handleUpload} /> */}
//         </div>
//       {storage && (
//         <div className="flex w-full">
//         <Image src={`${storage}`} width={200} height={200} alt={"storage"} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUpload;

import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import supabase from '@/utils/supabaseClient';
import { useGlobalContext } from "../(dashboard)/(context)/store";
import Image from 'next/image';

function ImageUpload() {
  const [images, setImages] = useState<any>([]);
  const [uploaded,setUploaded] = useState<Boolean>(false);
  const {userId, setUserProfile, userProfile } = useGlobalContext();


  const onChange = (imageList: any) => {
    setImages(imageList);
  }
  useEffect(() => {
    const getUploadedImage =  () => {
        if (images.length > 0) {
            const { data: { publicUrl } } = supabase.storage.from("UserProfiles").getPublicUrl(`${userId}/${images[0].file.name}`);
            setUploaded(false);
            setUserProfile(publicUrl);
        }
    };
    if(uploaded){
      getUploadedImage();
    }
  },[images, setUserProfile, uploaded, userId])
  const onUpload = async() => {
    if (images.length > 0) {
      const { data, error } = await supabase.storage
        .from('UserProfiles').upload(`${userId}/${images[0].file.name}`, images[0].file, {
                    upsert: true,
                  })
                  setUploaded(true);
      if (error) throw error;
    }
  }

  return (
    <ImageUploading
      value={images}
      onChange={onChange}
      dataURLKey="data_url" 
    >
      {({ imageList, onImageUpload }) => (
        <div className='flex items-center justify-center bg-lightPurple'>
          {imageList[0]?.data_url?<Image src={imageList[0]?.data_url} width={150} height={150} alt={"storage"} />:<div className='flex justify-center items-center'>
            <button onClick={onImageUpload} className='flex justify-center flex-col items-center pt-[60px] pb-[60px] pr-[38px] pl-[38px]'>
            <Image
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