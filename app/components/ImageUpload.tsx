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
  const {userId } = useGlobalContext();

  const onChange = (imageList: any) => {
    setImages(imageList);
    localStorage.setItem('dataUrl', imageList[0]?.data_url)
  }
  
  const onUpload = async() => {
    if (images.length > 0) {
      const { data, error } = await supabase.storage
        .from('UserProfiles').upload(`${userId}/${images[0].file.name}`, images[0].file, {
                    upsert: true,
                  })
      if (error) throw error;
    }
  }
  const saved = localStorage.getItem('dataUrl');
  console.log(saved, "saved")
  console.log(images, "images")
  return (
    <ImageUploading
      value={images}
      onChange={onChange}
      dataURLKey="data_url" 
    >
      {({ imageList, onImageUpload }) => (
        <div>
          <button onClick={onImageUpload}>
            Upload Image
          </button>
          <Image src={saved||''} width={50} height={50} alt={"storage"} />
          <button onClick={onUpload}>
            Save
          </button>
        </div>
      )}
    </ImageUploading>
  );
}

export default ImageUpload;