import React from 'react'
import "./header.css"

export default function  Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitlesSm'>
          
           Kenya   </span>
        <span className='headerTitlesLg'>Nairobi</span>
      </div>
      <img
        className='headerImg'
        src='https://images.pexels.com/photos/10495959/pexels-photo-10495959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
      />

    </div>
  )
}
