import React, { useState } from 'react';
import Image from 'next/image';
import supabase from '@/utils/supabaseClient';

const ImageUpload = () => {
    const [image, setImage] = useState<File | undefined>();
    const [storage, setStorage] = useState<string | undefined>();

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
        }
        if (image) {
                const { data } = await supabase.storage
                    .from('UserProfiles')
                    .upload(`${image.name}`, image);
                    console.log(data, "data");
                const publicUrl = data?.path;
                if (publicUrl) {
                    setStorage(publicUrl);
                }
                console.log('received', publicUrl);
            }
            console.log('uploaded',storage);
            console.log('uploaded1',image);
    };

    return (
        <div className='flex'>
            <input type='file' onChange={handleUpload} />
            {storage && (
                <Image src={storage} width={200} height={200} alt={'storage'} />
            )}
        </div>
    );
}

'https://bqjmarvunpsdurmdeoof.supabase.co/storage/v1/object/public/UserProfiles/0.6986548394896595.jpeg'
'https://bqjmarvunpsdurmdeoof.supabase.co/storage/v1/object/sign/UserProfiles/0.261268489113903.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJVc2VyUHJvZmlsZXMvMC4yNjEyNjg0ODkxMTM5MDMuanBlZyIsImlhdCI6MTY5ODk2MzAzMiwiZXhwIjoxNjk5NTY3ODMyfQ.hBYRFXgE9aUgr87wHvZ5kn3oh2cFQ9zdpWwtGtkD3Io&t=2023-11-02T22%3A10%3A32.471Z'

export default ImageUpload