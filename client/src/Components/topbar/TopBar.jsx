import { Link } from "react-router-dom"
import "./topbar.css"
import { useContext } from "react";
import { Context } from "../context/Context";
export default function TopBar() {
  const {user} = useContext(Context);
  return (
   <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-twitter"> </i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className='Link' to='/'>
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className='Link' to='/About'>
              About
            </Link>
          </li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">
            <Link className='Link'to='/write'>
              Blog
            </Link>
            </li>
          <li className="topListItem">
            {user && 'Logout'}</li>
        </ul>
        </div>

      <div className="topRight">
        {user ? (
          <Link to="/Settings">
            <img className="topImg" src="https://images.pexels.com/photos/6056462/pexels-photo-6056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/signup">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
       
        <i className="topSearch fa-solid fa-magnifying-glass"></i>
        </div>
   </div>
    
    
  )
}
