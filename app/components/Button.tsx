import React from 'react'

type ButtonProps  = {
    text:string,
    color:string,
    textColor:string,
    onClick:(e: React.MouseEvent<HTMLButtonElement>)=>void
}

const Button: React.FC<ButtonProps> = ({text,onClick,color,textColor}) => {
  return (
    <button className={`flex ${color} w-full text-center justify-center h-[46px] items-center ${textColor} rounded-md`} onClick={onClick}>{text}</button>
  )
}

export default Button