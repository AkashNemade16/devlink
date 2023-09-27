"use client";
import React from "react";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleOnSubmit = async () => {
    const supabase = createClientComponentClient()
    await supabase.auth.signUp({
        email,
        password,
        options:{
            emailRedirectTo:`${location.origin}/api/auth/callback`
        }
    })
  }
  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col">
      <div className="flex">
        <h1>Login</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="eg@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-col">
          <label>Confirm password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="At least 8 characters" />
        </div>
      </div>
      <div className="flex">
        <button onClick={handleOnSubmit} type="button">Create Account</button>
      </div>
    </form>
  );
};

export default SignUp;
