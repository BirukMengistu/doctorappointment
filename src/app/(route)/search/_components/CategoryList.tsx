'use client'
import GlobalApi from '@/app/_utils/GlobalApi';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command';
import Image from 'next/image';
import Link from 'next/link';
import React,{useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';
import { cn} from '@/app/lib/utils';
type CategoryListProps={
   
}
function CategoryList({}:CategoryListProps) {
    const params = useParams()
    const category = params && params.cname
     const [categoryList, setCategoryList] = useState([]);
    
    useEffect(()=>{
        console.log(params.cname)
        getCategoryList()
    },[])
    const getCategoryList=()=>{
        GlobalApi.getCategory().then((response)=>setCategoryList(response.data.data))
    }
  return (
    <div className='h-screen mt-5 flex flex-col'>
     <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className='overflow-visible'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {categoryList && categoryList.map((item,index)=>
            <CommandItem key={index}>
             <Link href={`/search/${item?.attributes?.name}`} 
                className={cn('p-2 flex w-full flex-row gap-2 items-center  text-primary rounded cursor-pointer',
                'focus:text-white focus:bg-primary font-bold scale-110 transition-all ease-in-out',`${category==item?.attributes.name&&'bg-primary'}`)}
               >
                     <Image src={item?.attributes?.icon?.data?.attributes.url}
                     alt='icon'
                     width={25}
                     height={25} />
                    <label>
                    {item?.attributes.name}
                    </label>
                </Link>
                </CommandItem>
          )}
          
        </CommandGroup>
      </CommandList>
    </Command>
    </div>
  )
}

export default CategoryList
