import React from "react";
import CategoryList from "./_components/CategoryList";
type layoutProps={
    children:React.ReactNode
}
export default function layout({ children }:layoutProps) {
  return <div className="grid grid-cols-4">

        <div className="hidden md:block">
        {/* */}
        <CategoryList/>
        </div>

    <div className='col-span-4 md:col-span-3'>
    {children}
    </div>
 
    </div>;
}
