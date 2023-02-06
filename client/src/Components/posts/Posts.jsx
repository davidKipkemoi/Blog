import React from 'react'
import Post from '../post/Post'
import "./posts.css"

export default function Posts({gallery}) {
  return (
    <div className='posts'>
   {gallery.map((p,i) =>(
     <Post post={p} key = {i} />
   ))}
   </div>
  )
}
