import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'

export default async function Home() {
  const supabase = createServerComponentClient({cookies})
  const {data} = await supabase.storage.from('devLink_content').list('images',{
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })
  const CDNURL = 'https://baqnudafllnpwpnshixg.supabase.co/storage/v1/object/public/devLink_content/images'
  console.log(data)
  return (
    <>
    {data?.map((item,index)=>{
  
      <Image
      key={index}
        src={CDNURL+item.name}
        width={50}
        height={50}
        alt=''
      />
      console.log(item.name)
    })}
      {/* <div>
       <Image
        src={data.publicUrl}
        alt='image'
        width={250}
        height={50}
       />
      </div> */}
    </>
  )
}
