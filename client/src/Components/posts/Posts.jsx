import React from 'react'
import Post from '../post/Post'
import "./posts.css"

export default function Posts() {
  return (
    <div className='posts'>
    <Post img="https://images.pexels.com/photos/5125528/pexels-photo-5125528.jpeg" />
      <Post img="https://images.pexels.com/photos/1233286/pexels-photo-1233286.jpeg" />
      <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </div>
  )
}
