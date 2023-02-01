import React from 'react'
import Post from '../post/Post'
import "./posts.css"

export default function Posts({fPost}) {
  return (
    <div className='posts'>
   {fPost.map((p)=>(
     <Post  img="https://images.pexels.com/photos/5125528/pexels-photo-5125528.jpeg"/>
   ))}
   
   
    </div>
  )
}
