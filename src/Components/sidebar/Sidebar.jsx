import React from "react";
import "./siderbar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">H A K U N A <br></br>
                                      M A T A T A</span>
        <img
          src="https://images.pexels.com/photos/5989890/pexels-photo-5989890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">C A T E G O R I E S</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            
              Lions
            
          </li>
          <li className="sidebarListItem">
            
              Zebras
            
          </li>
          <li className="sidebarListItem">
            
              Monkeys
            
          </li>
          <li className="sidebarListItem">
            
              Giraffes
            
          </li>
          <li className="sidebarListItem">
            
              Birds
            
          </li>
          <li className="sidebarListItem">
            
              Elephants
            
          </li>
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