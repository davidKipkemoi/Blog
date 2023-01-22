import React from 'react'
import Singlepost from '../../singlepost/Singlepost'
import Sidebar from '../../sidebar/Sidebar'
import './single.css' 

export default function Single() {
  return (
    <div className="single">
      <Singlepost/>
       <Sidebar/>
    </div>
    
  )
}