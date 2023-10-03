import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {redirect} from 'next/navigation';
import DashHeader from "./dashHeader";
import DashFooter from "./dashFooter";

export default async function DashboardLayout({children}:{children:React.ReactNode}){
    const supabase = createServerComponentClient({cookies})
    const {data} = await supabase.auth.getSession()
    
    if(!data.session){
        redirect('/login')
    }

    return(
    
        <div className="flex flex-col justify-center w-[311px] md:w-full items-center">
            <DashHeader/>
            <div>
            {children}
            </div>
            <DashFooter/>
        </div>
        
    )
}
// flex flex-col items-center justify-between mx-10 w-[311px] md:w-[476px]