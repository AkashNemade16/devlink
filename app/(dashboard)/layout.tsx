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
        <>
        <div>
            <DashHeader/>
            {children}
            <DashFooter/>
        </div>
        </>
    )
}