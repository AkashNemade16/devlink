"use client";
import React from "react";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import Header from "@/app/components/Header";
import Link from "next/link";
const SignUp = () => {
    const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error,setError] = useState('');
  const handleOnSubmit = async (e:any) => {
    e.preventDefault()
    setError('')
    const supabase = createClientComponentClient()
    const {data,error} = await supabase.auth.signUp({
        email,
        password,
        options:{
            emailRedirectTo:`${location.origin}/api/auth/callback`
        }
    })
    console.log(data.user?.id)
    if(error){
        setError(error.message)
    }
    if(!error){
        router.push('/Homepage')
    }
    router.refresh()
  }
  return (
    <>
     <div className="flex items-center justify-center flex-1 flex-col">
      <Header/>
    <form
        onSubmit={handleOnSubmit}
        className="flex flex-col items-center justify-between mx-10 w-[311px] md:w-[476px]"
      >
        <div className="flex flex-col w-full">
          <h1 className="h-[36px] font-bold text-2xl">Create Account</h1>
          <p className="text-grey h-[48px] text-base">
          Let’s get you started sharing your links!
          </p>
        </div>
      {/* password */}
        <div className="flex flex-col w-full">
          <div className="flex flex-col mt-[20px] ">
            <label className="text-base font-[400] text-darkgrey">
              Email Address
            </label>
            <div className="flex w-full">
              <div className="flex items-center justify-between pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M14 3H2C1.86739 3 1.74021 3.05268 1.64645 3.14645C1.55268 3.24021 1.5 3.36739 1.5 3.5V12C1.5 12.2652 1.60536 12.5196 1.79289 12.7071C1.98043 12.8946 2.23478 13 2.5 13H13.5C13.7652 13 14.0196 12.8946 14.2071 12.7071C14.3946 12.5196 14.5 12.2652 14.5 12V3.5C14.5 3.36739 14.4473 3.24021 14.3536 3.14645C14.2598 3.05268 14.1326 3 14 3ZM13.5 12H2.5V4.63688L7.66187 9.36875C7.75412 9.45343 7.87478 9.50041 8 9.50041C8.12522 9.50041 8.24588 9.45343 8.33813 9.36875L13.5 4.63688V12Z"
                    fill="#737373"
                  />
                </svg>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="eg@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col mt-9">
            <label>Password</label>
            <div className="flex items-center">
              <div className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 5H11V3.5C11 2.70435 10.6839 1.94129 10.1213 1.37868C9.55871 0.81607 8.79565 0.5 8 0.5C7.20435 0.5 6.44129 0.81607 5.87868 1.37868C5.31607 1.94129 5 2.70435 5 3.5V5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V6C14 5.73478 13.8946 5.48043 13.7071 5.29289C13.5196 5.10536 13.2652 5 13 5ZM8.5 9.91438V11.5C8.5 11.6326 8.44732 11.7598 8.35355 11.8536C8.25979 11.9473 8.13261 12 8 12C7.86739 12 7.74021 11.9473 7.64645 11.8536C7.55268 11.7598 7.5 11.6326 7.5 11.5V9.91438C7.16639 9.79643 6.88522 9.56434 6.70618 9.25914C6.52715 8.95393 6.46177 8.59526 6.5216 8.24651C6.58144 7.89776 6.76264 7.58139 7.03317 7.35332C7.3037 7.12525 7.64616 7.00016 8 7.00016C8.35384 7.00016 8.6963 7.12525 8.96683 7.35332C9.23736 7.58139 9.41856 7.89776 9.4784 8.24651C9.53823 8.59526 9.47285 8.95393 9.29382 9.25914C9.11478 9.56434 8.83361 9.79643 8.5 9.91438ZM10 5H6V3.5C6 2.96957 6.21071 2.46086 6.58579 2.08579C6.96086 1.71071 7.46957 1.5 8 1.5C8.53043 1.5 9.03914 1.71071 9.41421 2.08579C9.78929 2.46086 10 2.96957 10 3.5V5Z"
                  fill="#737373"
                />
              </svg>
              </div>
             
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
              />
            </div>
          </div>
          <div className="flex flex-col mt-9">
            <label>Confirm Password</label>
            <div className="flex items-center">
              <div className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 5H11V3.5C11 2.70435 10.6839 1.94129 10.1213 1.37868C9.55871 0.81607 8.79565 0.5 8 0.5C7.20435 0.5 6.44129 0.81607 5.87868 1.37868C5.31607 1.94129 5 2.70435 5 3.5V5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V6C14 5.73478 13.8946 5.48043 13.7071 5.29289C13.5196 5.10536 13.2652 5 13 5ZM8.5 9.91438V11.5C8.5 11.6326 8.44732 11.7598 8.35355 11.8536C8.25979 11.9473 8.13261 12 8 12C7.86739 12 7.74021 11.9473 7.64645 11.8536C7.55268 11.7598 7.5 11.6326 7.5 11.5V9.91438C7.16639 9.79643 6.88522 9.56434 6.70618 9.25914C6.52715 8.95393 6.46177 8.59526 6.5216 8.24651C6.58144 7.89776 6.76264 7.58139 7.03317 7.35332C7.3037 7.12525 7.64616 7.00016 8 7.00016C8.35384 7.00016 8.6963 7.12525 8.96683 7.35332C9.23736 7.58139 9.41856 7.89776 9.4784 8.24651C9.53823 8.59526 9.47285 8.95393 9.29382 9.25914C9.11478 9.56434 8.83361 9.79643 8.5 9.91438ZM10 5H6V3.5C6 2.96957 6.21071 2.46086 6.58579 2.08579C6.96086 1.71071 7.46957 1.5 8 1.5C8.53043 1.5 9.03914 1.71071 9.41421 2.08579C9.78929 2.46086 10 2.96957 10 3.5V5Z"
                  fill="#737373"
                />
              </svg>
              </div>
             
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="At least 8 characters"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center m-4">
          <p className="text-xs text-grey">Password must contain at least 8 characters</p>
        </div>
        <div className="flex w-full mt-5">
         <Button text={'Create new account'} onClick={handleOnSubmit} color='bg-purple' textColor="text-white" disabled={false}/>
        </div>
        <div className="flex flex-col items-center mt-6 ">
          <p className="font-[16px] text-grey">Already have an account?</p>
          <Link href='/login'><p className="text-purple font-[16px]">Login</p></Link>
        </div>
      </form>
    </div>
   
    {error && (
        <div className="error">
            {error}
        </div>
    )}
    </>
   
  );
};

export default SignUp;
