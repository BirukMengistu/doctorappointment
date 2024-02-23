'use client'
import React, { useState,useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
type DoctorlistProp={
  doctorList:any,
  heading:string,
  loading:boolean
}
function DoctorList({doctorList,loading,heading='Popular Doctors'}:DoctorlistProp) {
    console.log(typeof doctorList)
    
  return (
    <div className='mb-10 px-8'>
      {/* Doctor list  */}
      <h3 className='font-bold text-lg mb-2'>Popular Doctors </h3>
     <div 
     className='grid grid-cols-2 
     sm:grid-cols-2 md:grid-cols-3
     gap-7 mt-4
      lg:grid-cols-4  '>
     {
        doctorList.length > 0 ? doctorList.map(
            (doctor:any, index:string) =>
            (<div key={index} className='border-[1px] rounded-lg p-3
            cursor-pointer hover:border-primary
            hover:shadow-sm transition-all ease-in-out'> 
              <Image src={doctor?.attributes?.image?.data[0]?.attributes?.url}
              alt='pic-dr'
              width={500}
              height={200}
              unoptimized={true} 
              className='h-[200px] w-full object-contain rounded-lg '/>
             <div className='mt-3 items-baseline
              flex flex-col'>
             <h2 className='text-[10px] rounded-md px-4 bg-blue-200
              text-primary'>{doctor.attributes.category.data.attributes.name}</h2>
             </div>
             <h2 className='text-[10px] font-bold '>Dr.{' '}{doctor.attributes.name}</h2>
             <h2 className='text-[10px]  font-bold text-blue-200 '>{doctor.attributes.Years_of_Experiance} years</h2>
             <Link href={`/details/${doctor?.id}`}>
             <h2 className='mb-2 p-2 mt-p px-3  border-[1px]
              border-primary text-primary rounded-lg
              w-full text-center cursor-pointer
               hover:bg-primary
               hover:text-white' 
             >Book Now</h2>
             </Link>
             
            </div>)
        ):
        [1,2,3,4,6,7].map((item,index)=>(
          <div key={index}
          className='h-[220px] bg-blue-200 w-full rounded-lg animate-pulse'>

           </div>
        ))
      }
     </div>
      
    </div>
  )
}

export default DoctorList
