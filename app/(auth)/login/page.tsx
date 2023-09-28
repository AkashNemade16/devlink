'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from "react";
const Login = () => {
  const router = useRouter()
  const [error,setError] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleOnSubmit = async (e:any) => {
      e.preventDefault()
      setError('')
      const supabase = createClientComponentClient();
      const {error} = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if(error){
        setError(error.message)
      }if(!error){
        router.push('/')
      }
      }
  return (
    <>
         <form onSubmit={handleOnSubmit} className="flex flex-col">
        <div className="flex">
          <h1>Login</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label>Email Address</label>
            <input
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
             placeholder="eg@example.com" />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input 
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password"/>
          </div>
        </div>
        <div className="flex">
            <button onClick={handleOnSubmit}>Login</button>
        </div>
      </form>  
      {error && (
        <div>
          {error}
        </div>
      )}
    </>
  )
}

export default Login