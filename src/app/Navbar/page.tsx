import React from 'react'
import "../Navbar/navbar.css";
import Link from 'next/link';

// About Media News Purchase Social-Media Contact-Us


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
              <li className="home-nav-link">
                <Link href="/">Home</Link></li> 
              <li><Link href="/AboutUs">About Us</Link></li> 
              <li><Link href="/News">News</Link></li> 
              <li><Link href="/Purchase">Purchase</Link></li>
              <li><Link href="Contact Us">Contact Us</Link></li> 
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