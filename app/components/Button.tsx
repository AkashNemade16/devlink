import React from 'react'

type ButtonProps  = {
    text:string,
    onClick:(e: React.MouseEvent<HTMLButtonElement>)=>void
}

const Button: React.FC<ButtonProps> = ({text,onClick}) => {
  return (
    <button className='flex bg-purple w-full text-center justify-center h-[46px] items-center text-white rounded-md' onClick={onClick}>{text}</button>
  )
}

export default Button