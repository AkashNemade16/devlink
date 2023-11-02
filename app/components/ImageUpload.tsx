import React, { useState } from 'react';
import { uploadImage } from '../UploadImages/UploadImage';
import Image from 'next/image';
import supabase from '@/utils/supabaseClient';

const ImageUpload = () => {
    const [image, setImage] = useState<string | undefined>();
    const getUploadedImages = async () => { 
        const {data} = await supabase.storage.from('UserProfiles').list('')
        console.log(data);
    }
    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const data = await uploadImage(file);
            if (data) {
                setImage(data.path);
            }
        }
    };
    getUploadedImages()
    
    return (
        <div>
            <input type="file" onChange={handleUpload} />
            {image && <Image src={image} width={200} height={200} alt={''} />}
        </div>
    );
};

export default ImageUpload