'use client'
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/categorysearch";
import DoctorList from "./_components/DoctorList";
import React,{useState, useEffect} from 'react';
import GlobalApi from "./_utils/GlobalApi";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getDoctors=()=>{
     GlobalApi.getDoctors().then(
        (resp)=>setDoctorList(resp.data.data)
     )
    }
    useEffect(()=>{
      setTimeout(() => {
       getDoctors()
       setLoading(false)
      }, 2000)
      
    },[])
    console.log(doctorList)
  return (
    <div className="">
     <Hero/>
     {/*search bar*/} 
     <CategorySearch/>
     {/*DoctorList*/} 
     <DoctorList doctorList={doctorList} loading={loading} heading="Pouplar Doctors" />
    </div>
  );
}
