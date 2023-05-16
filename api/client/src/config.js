import axios from "axios"
export const axiosInstance = axios.create({
   baseURL: "https://safari-app.herokuapp.com/api/",
   });