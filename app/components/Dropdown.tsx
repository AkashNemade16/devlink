import React,{useState,useEffect} from 'react'
import { useGlobalContext } from '../(dashboard)/(context)/store'
import Image from 'next/image'
const options = [
    "Github",
    "Codewars",
    "Stackoverflow",
    "FrontendMentor",
    "LinkedIn",
    "Twitter",
    "Hashnode",
    "Youtube",
    "Facebook",
    "Gitlab",
    "Codepen",
    "Twitch",
    "Freecodecamp",
  ];

const getImagesDropdown = () => {
    const images = options.map((option) => {
        switch (option) {
            case "Github":
              return "/images/icon-github.svg";
            case "Codewars":
              return "/images/icon-codewars.svg";
            case "Stackoverflow":
              return "/images/icon-stack-overflow.svg";
            case "FrontendMentor":
              return "/images/icon-frontend-mentor.svg";
            case "LinkedIn":
              return "/images/icon-linkedin.svg";
            case "Twitter":
              return "/images/icon-twitter.svg";
            case "Hashnode":
              return "/images/icon-hashnode.svg";
            case "Youtube":
              return "/images/icon-youtube.svg";
            case "Facebook":
              return "/images/icon-facebook.svg";
            case "Gitlab":
              return "/images/icon-gitlab.svg";
            case "Codepen":
              return "/images/icon-codepen.svg";
            case "Twitch":
              return "/images/icon-twitch.svg";
            case "Freecodecamp":
              return "/images/icon-freecodecamp.svg";
            default:
              return "/images/icon-github.svg";
          }
    })
    return images
}


const getImagesDropdownHover = getImagesDropdown()
const Dropdown = ({ selected, setSelected, index }: { index:number, selected: string, setSelected: React.Dispatch<React.SetStateAction<string>> }) => {
    const { links, setType,  } = useGlobalContext();
    const [open, setOpen] = useState<boolean>(false)
    const toggle = () => setOpen(!open)
    options.filter((item)=>{
        return item !== selected
    })
    useEffect(()=>{
        const handleOutsideClick = (e:MouseEvent) => {
            if(open){
                setOpen(false)
            }
        }
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    },[open, setOpen])
    return (
        <div className='flex flex-col w-full'>
            <div className='flex w-full' onClick={toggle}>
              {
                links.map((item,i)=>{
                    if(i===index){
                        return (
                        <div key={i} className='flex flex-row w-full'>
                           <Image
                                className='filter invert mr-2 ml-2'
                                src={item?.imageUrl ||'/images/icon-github.svg'}
                                alt={item?.type}
                                width={20}
                                height={20}
                                />
                            <div className='flex w-full'>{item.type}</div>
                        </div>
                        )
                    }
                })
              }
            </div>
            {open && (
                <div className='flex flex-col w-full'>
                    {options.map((option,index) => (
                        <div className='flex w-full' key={index} onClick={() => {
                            setType(option)
                            setSelected(option)
                            toggle()
                        }}>
                            <Image
                                className='filter invert mr-2 ml-2'
                                src={getImagesDropdownHover[index]||''}
                                alt={option}
                                width={20}
                                height={20}
                            />
                            {option || "Github"}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Dropdown