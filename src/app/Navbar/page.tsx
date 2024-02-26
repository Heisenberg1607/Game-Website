import React from 'react'
import "../Navbar/navbar.css";


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo-div">
          <div className="logo">Raven</div>
        </div>
        <div className="guide-btns">
          <ul className="list-btns">
            <div className="nav-links">
              <li>Home</li> 
              <li>About Us</li> 
              <li>Community</li>
            </div>
            
            <li className="log-in-div">
              <button className="log-in-btn">Log In</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar