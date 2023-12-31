import React, { useEffect,useState } from "react";
import { useGlobalContext } from "../../(context)/store";
import PreviewButton from "@/app/components/PreviewButton";
import { selectImages } from "@/common/getImages";
import supabase from "@/utils/supabaseClient";
import Image from "next/image";
const Illustrationphone = () => {
  const { email, links , firstName, lastName ,userProfile, uploaded, images,userId ,setUserProfile} = useGlobalContext();
  const [imageUrl,setImageUrl] = useState<any>('')
  useEffect(() => {
    const getUploadedImage =  () => {
      if (images.length > 0) {
          const { data: { publicUrl } } = supabase.storage.from("UserProfiles").getPublicUrl(`${userId}/${images[0].file.name}`);
          localStorage.setItem('userProfile', publicUrl);
      }
      setImageUrl(localStorage.getItem('userProfile'));
  }; 
  getUploadedImage();
  },[userProfile, imageUrl, uploaded, images, userId, setUserProfile,setImageUrl])

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
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="308"
        height="632"
        fill="none"
        viewBox="0 0 308 632"
      >
        <path
          stroke="#737373"
          d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
        />
        <path
          fill="#fff"
          stroke="#737373"
          d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
        />
        {
          <>
            <foreignObject x='110' y='70' width="50%" height="25%">
             {imageUrl?
              <div className="rounded-full overflow-hidden w-[96px] h-[96px]">
              <Image className="rounded-full" src={imageUrl} alt="" width={'100'} height={'100'}/>
              </div>
             :
            <div className="rounded-full w-[96px] h-[96px] bg-svgLightGrey">
            </div>
              }
            </foreignObject>
        
            <foreignObject x="80" y="185" width="100%" height="100%">
            {
             firstName?<div className="flex ml-4">
                <p className="flex">{firstName} {lastName}</p>
             </div> : 
             <div className="w-[150px] h-[16px] bg-svgLightGrey rounded-full"></div>
            }
            </foreignObject>
            <foreignObject x="70" y="200" width="100%" height="100%">
              {email ? (
                <p className="text-grey mt-3">{email}</p>
              ) : (
                <rect
                  width="72"
                  height="8"
                  x="117.5"
                  y="214"
                  fill="#EEE"
                  rx="4"
                />
              )}
            </foreignObject>
            {
              <foreignObject x="40" y="300" width="100%" height="100%">
                {
                  links?.map((item, index) => {
                    return (
                      <div key={index}>
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
              </foreignObject>
            }
          </>
        }
      </svg>
    </div>
  );
};

export default Illustrationphone;
