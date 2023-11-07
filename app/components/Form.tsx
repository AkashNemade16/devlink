import React from 'react'
import { useGlobalContext } from '../(dashboard)/(context)/store'

const Form = () => {
    const { firstName, lastName, setFirstName,setLastName, email } = useGlobalContext();
  return (
    <div className='flex items-center justify-center flex-col gap-8 w-full'>
        <div className='flex flex-col md:flex-row md:justify-between w-full'>
            <label htmlFor='firstName' className='text-grey'>First Name*</label>
            <input value={firstName} onChange={e=>setFirstName(e.target.value)} type='text' placeholder='First Name' className='border border-grey rounded-md p-2'/>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between w-full'>
            <label htmlFor='lastName' className='text-grey'>Last Name*</label>
            <input value={lastName} onChange={e=>setLastName(e.target.value)} type='text' placeholder='Last Name' className='border border-grey rounded-md p-2'/>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between w-full'>
            <label htmlFor='email' className='text-grey'>Email</label>
            <input value={email} onChange={()=>{}} type='text' placeholder='Email' className='border border-grey rounded-md p-2'/>
        </div>
    </div>
  )
}

export default Form