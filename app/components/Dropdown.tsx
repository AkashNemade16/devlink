import React,{useState,useEffect} from 'react'
import { useGlobalContext } from '../(dashboard)/(context)/store'
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

const Dropdown = ({ selected, setSelected }: { selected: string, setSelected: React.Dispatch<React.SetStateAction<string>> }) => {
    const { links, type, setType } = useGlobalContext();
    const [open,setOpen] = useState(false)

    const toggle = () => setOpen(!open)

    return (
        <div className='flex flex-col'>
            <div>
                <div onClick={toggle}>
                    {links.map((item,index)=>{
                        return (
                            <div key={index}>
                                {item.type}
                            </div>
                        )
                    })}
                </div>
            </div>
            {open && (
                <div className='flex flex-col'>
                    {options.map((option,index) => (
                        <div key={index} onClick={() => {
                            setType(option)
                            setSelected(option)
                            toggle()
                        }}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Dropdown