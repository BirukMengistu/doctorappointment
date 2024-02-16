import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <Button> Get Started</Button>
    </div>
    
  );
}
