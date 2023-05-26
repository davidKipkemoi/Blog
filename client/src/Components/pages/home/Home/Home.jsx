import React from 'react'
import { useState,useEffect } from 'react'
import Header from '../../../header/Header'
import Sidebar from "../../../sidebar/Sidebar"
import Posts from '../../../posts/Posts'
import "./home.css"
import { useLocation } from 'react-router-dom'
import axios from "axios"
export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation()
  
  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get("/https://safari-blog.onrender.com/posts" + search);
      
      setPosts(res.data)
      
    }
  
   fetchPosts()
  },[search])
  return (
    <>
    <Header/>
      <div className='home'>
        <Posts gallery = {posts}/>
        <Sidebar/>
    </div>
    </>
    
  )
}
