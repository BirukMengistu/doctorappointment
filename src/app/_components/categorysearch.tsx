'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect,useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'

function CategorySearch() {
    const [categoryList, setCategoryList] = useState([]);
    
    useEffect(()=>{
        getCategoryList()
    },[])
    const getCategoryList=()=>{
        GlobalApi.getCategory().then((response)=>setCategoryList(response.data.data))
    }
    const cloudinaryImageLoader = ({ src }) => {
        return `${src}`;
      };
  return (
    <div className='mb-10 items-center flex flex-col gap-2'>
     
      <h2 className='font-bold text-4xl tracking-wider '>
         Search 
         <span className='text-primary'>Doctors</span></h2>
         <h2 className='text-gray-500 text-xl p-5'>
            search your doctor and book appointment. 
         </h2>
         <div className='flex w-full max-w-sm items-center p-5 gap-2
         '>
         <Input type='text' placeholder='search' />
           <Button type='submit'>
            <Search className='w-4 h-4 mx-2'/>
            Search</Button>
         </div>
         {/* Display List of Category */}
         
            <div className='grid grid-col-3 md:grid-cols-4 lg:grid-cols-5'>
            {categoryList && categoryList.map(
                (item, index)=>(
                    <div key={index}
                    className='flex flex-col text-center items-center
                    p-5 bg-blue-200 m-2 
                    rounded-md gap-2 cursor-pointer
                    hover:scale-110 transition-all ease-in-out'>
                        <Image 
                        loader={cloudinaryImageLoader}
                        src={item?.attributes?.icon?.data?.attributes.url} 
                        alt='Icon'
                        width={40}
                        height={40}
                        className='text-primary'/>
                        <label 
                        className='text-primary '>{item?.attributes.name}</label>
                    </div>
                )
            )
        }
            </div>
        
    </div>
  )
}

export default CategorySearch
