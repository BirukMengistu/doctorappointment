import { SoicalMedia } from '@/app/lib/constant'
import { GraduationCap, MapPin, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DoctorDetails({doctor,loading}:{
    doctor:any,
    loading:boolean
}) {

    const image = (doctor?.attributes?.image?.data[0]?.attributes?.url)!== undefined?true:false
  return (
    <div className=' '>
       
       <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5  rounded-lg'>
         {/* doctor Image */}
         <div className=''>
        {!image===false?<Image src={doctor?.attributes?.image?.data[0]?.attributes?.url} 
        alt='dr-image'
         width={200} 
         height={200}
         className='rounded-lg   object-contain'/>:
         <div className='h-[9rem] w-[9rem] bg-blue-200 rounded-md'></div>}
       </div>
        {/* doctor info */}
        <div className='col-span-2 flex flex-col gap-3 items-baseline' >
           <h3 className='font-bold text-2xl'>  {doctor?.attributes?.name}</h3>
          <h3 className='flex flex-row gap-2  py-2'>
            <GraduationCap className='text-gray-500'/>
            <span>
                {doctor?.attributes?.Years_of_Experiance ? doctor?.attributes?.Years_of_Experiance: 4} Years of Experiances
            </span>
          </h3>
          <h3 className='font-normal text-md text-gray-500 gap-2 flex'> 
           <User2/>
           {doctor?.attributes?.paients} No of Patients
           </h3>
           <h3 className='font-normal rounded-md text-md bg-primary text-white px-2'> 
           {doctor.attributes?.category.data.attributes.name} 
           </h3>
           <div className='flex gap-2'>
            {SoicalMedia && SoicalMedia.map(
                (item,index)=> (<Link key={index} href={item.url}
                 className=' hover:scale-125 transition-all ease-in-out'>
                <Image  src={item.icon} 
                width={30}
                height={30}
                alt='socialmedia-icon'

                />
                </Link>)
            ) }
            
           </div>
           <h2 className='mb-2 p-2 mt-p px-3  border-[1px]
              border-primary text-primary rounded-lg
              w-full text-center cursor-pointer
               hover:bg-primary
               hover:text-white' 
             >Book Now</h2>
           
        </div>
       </div>
       

        <div className='p-3 border-[1px] rounded-lg mt-5'>
             <h3 className='font-bold text-[20px]'>About Me</h3>
             <p className='text-gray-500 tracking-wide'>{doctor?.attributes?.About}</p>
           </div>
       </div>
  )
}

export default DoctorDetails
