'use client'
import React from 'react'
import { useState } from "react";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleOnSubmit = () => {
        console.log(email,password)
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
    </>
  )
}

export default Login