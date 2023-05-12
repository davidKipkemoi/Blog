import React from 'react'
import { useState,useEffect } from 'react'
import Header from '../../../header/Header'
import Posts from '../../../posts/Posts'
import Sidebar from '../../../sidebar/Sidebar'
import "./home.css"
import { useLocation } from 'react-router-dom'
import { axiosInstance } from '../../../../config'

export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation()
  
  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axiosInstance.get("/posts" + search);
      
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
