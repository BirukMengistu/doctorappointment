'use client'
import { Button } from "@/components/ui/button";
import { LoginLink, LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Menu = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Exploer",
    path: "/exploer",
  },
  {
    id: 3,
    name: "Contact us",
    path: "/contactus",
  },
];

export default function Header() {
    const {user} = useKindeBrowserClient()
  return (
    <div className="flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center gap-10">
      <Image alt="logo" src="/logo.svg" width={80} height={40} />
      <ul className="md:flex gap-8 hidden">
        {Menu.map((item, index) => 
         <Link key={index} href={item.path}>
         <li
          className="hover:text-primary cursor-pointer 
          hover:scale-105 transition-all ease-in-out">
            {item.name}</li>
         </Link>  
        )}
      </ul>
      
    </div>
     <div>
     {!user?
      <LoginLink>
      <Button> Get Started</Button>
      </LoginLink>:
      <>


      <Popover>
        <PopoverTrigger>
        <Image src={`${user?.picture}`} alt='profile-pic'
      width={30}
      height={30}
      className="rounded-full"/>
        </PopoverTrigger>
        <PopoverContent className="w-44">
          <ul className="flex flex-col gap-2 ">
            <li className="cursor-poiner
             hover:bg-slate-300 p-2 rounded-md">Profile</li>
            <li className="cursor-poiner
             hover:bg-slate-300 p-2 rounded-md">MyBooking</li>
            <li className="cursor-poiner
             hover:bg-slate-300 p-2 rounded-md text-red-400">
              <LogoutLink>Log out</LogoutLink>
             </li>
          </ul>
       
        </PopoverContent>
      </Popover>
     
      
      </>
      
      }
    
    
     </div>
   
    
    </div>
    
  );
}
