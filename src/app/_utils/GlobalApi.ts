import axios from "axios";
const API_KEY=process.env.NEXT_PUBLIC_STRAPI_KEY

const axiosClient = axios.create({
    baseURL:'http://localhost:1338/api',
    headers:{
        'Authorization':`Bear ${API_KEY}`
    }
})

const getCategory=()=>{
const response =axiosClient.get('/categories/?populate=*')
return response
}
const getDoctors=()=>{
    const response =axiosClient.get('/doctors/?populate=*')
    return response
    }
    const getDoctorByCategory=(category:string)=>{
        const response =axiosClient.get('/doctors/?filters[category][name][$in]='+category+'&populate=*')
        return response
        }

  ///api/doctors/:id

    


const getDoctorById =(id:any)=>{
    const response = axiosClient.get('/doctors/'+id+'/?populate=*')
        return response
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getCategory,
    getDoctors,
    getDoctorByCategory,
    getDoctorById
}