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
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getCategory
}