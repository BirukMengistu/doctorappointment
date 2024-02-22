'use client'
import GlobalApi from '@/app/_utils/GlobalApi';
import React,{ useEffect, useState }  from 'react';
import Doctorlist from '@/app/_components/DoctorList';
import DoctorList from '../../../_components/DoctorList';

/* type searchProps={
    params:any
} */
const SearchValue = ({ params }: { params: { cname: string } }) => {
   const [doctorList, setDoctorList] = useState([]);
   const [loading, setLoading] = useState(true);
   const category:string = params&& params.cname
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDoctorByCategory=()=>{
    GlobalApi.getDoctorByCategory(params.cname).then(
      (resp)=>setDoctorList(resp.data.data)
    )
   }
   console.log(doctorList)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getDoctorByCategory()
    },[params])

   
    
  return (
    <div>
      <Doctorlist heading={category}
      doctorList={doctorList}
      loading={loading}/>
    </div>
  )
}

export default SearchValue
