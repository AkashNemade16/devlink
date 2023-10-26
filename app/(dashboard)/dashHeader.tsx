'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation"; // import from next/router instead of next/navigation

const DashHeader = () => {
    const router = usePathname(); // use router instead of useRouter

    return (
        <div className="flex items-center justify-between w-full mt-2 mb-2">
            <div className="flex flex-row ">
                <Image
                    src={"images/logo-devlinks-small.svg"}
                    width={30}
                    height={30}
                    alt="icon"
                />
                <div className="hidden sm:flex">devLinks</div>
            </div>
            <div className={`flex ${router === "/Homepage" ? "bg-lightPurple" : ""} rounded-md p-2`}>
                <Link className="flex" href={"/Homepage"}>
                    <Image
                        src={"images/icon-links-header.svg"}
                        height={30}
                        width={30}
                        alt="icon"
                    />
                    <div className={`${router === "/Homepage" ? "text-purple":''} hidden md:flex`}>Links</div>
                </Link>
            </div>
            <div className={`flex ${router === "/Profile" ? "bg-lightPurple":''} rounded-md p-2`}>
                <Link className={`flex ${router === "/Profile" ? "fill-purple":''}`} href={"/Profile"}>
                    <Image
                        src={"images/icon-profile-details-header.svg"}
                        height={30}
                        width={30}
                        alt="icon"
                    />
                    <div className={`${router === "/Profile" ? "text-purple":''} hidden md:flex`}>profile details</div>
                </Link>
            </div>
            <div className="flex border-2 border-purple rounded-md">
                <button className="flex">
                    <Image
                        className="md:hidden m-1"
                        src={"images/icon-preview-header.svg"}
                        height={30}
                        width={30}
                        alt="icon"
                    />
                    <div className="hidden md:flex text-purple">preview</div>
                </button>
            </div>
        </div>
    );
};

export default DashHeader;