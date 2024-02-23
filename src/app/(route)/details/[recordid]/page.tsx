"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useState, useEffect } from "react";
import DoctorDetails from '../_components/DoctorDetails';
import DoctorSuggestionList from "../_components/DoctorSuggestionList";
type layoutProps = {
  childern: React.ReactNode;
};
function Details({ params }: { params: { recordid: string } }) {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = params && params?.recordid;
  const getDoctorById = () => {
    GlobalApi.getDoctorById(id).then((resp) => setDoctor(resp.data.data));
  };
  console.log(doctor);
  useEffect(() => {
    setTimeout(() => {
      getDoctorById();
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className='p-5 md:px-10'>
    <h2 className='font-bold text-[22px]'>Details</h2>

    <div className='grid grid-cols-1 lg:grid-cols-4 '>
      {/* Doctor Detail  */}
      <div className=' col-span-3'>
      {doctor && <DoctorDetails doctor={doctor} loading={loading}/>}
       
      </div>
      {/* Doctor Suggestion  */}
      <div>
        <DoctorSuggestionList/>
      </div>
    </div>
  </div>
  );
}

export default Details;
