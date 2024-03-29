import React, { useState,useEffect } from "react";
import "./siderbar.css";
import { Link } from "react-router-dom";
import axios from "axios"
export default function Sidebar() {
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    const getCat = async()=>{ 
      const res = await axios.get("https://safari-blog.onrender.com/api/categories")
      setCategories(res.data)
    };
    getCat();
  },[])
  return (
    <div className="sidebar" >
      <div className="sidebarItem">
        <span className="sidebarTitle">H A K U N A <br></br>
                                      M A T A T A</span>
        <img
          src="https://images.pexels.com/photos/5989890/pexels-photo-5989890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
         This Safari blog by Blitz Kenya is a platform where you can connect with nature by posting some of your experience here.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">C A T E G O R I E S</span>
        <ul className="sidebarList">
          {categories.map((c)=>(
            <Link to = {`/?cat=${c.name}` }>
            <li className="sidebarListItem">{c.name}</li>
            </Link>
            
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}