import axios from "axios"
export const axiosInstance = axios.create({
   baseURL: "https://safari-blog.herokuapp.com/api/",
   });