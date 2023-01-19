import "./topbar.css"
export default function TopBar() {
  return (
    <>
   <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-twitter"> </i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Blog</li>
          <li className="topListItem">Logout</li>
        </ul>
        </div>

      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/6056462/pexels-photo-6056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <i className="topSearch fa-solid fa-magnifying-glass"></i>
        </div>
   </div>
    
    </>
    
  )
}
