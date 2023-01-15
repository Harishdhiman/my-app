import React from 'react'
import '../css/header.css';
import { Link } from 'react-router-dom'; 

export default function NavBar() {
  return (
   <>
       
    <nav className="navbar navbar-expand-lg">
        <div className="container">
      <Link className="navbar-brand" to="/">Hcrim</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">ABOUT</Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link " to="/Blog">BLOG</Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link " to="/Contact">CONTACT</Link>
          </li>
        </ul>
      </div>
  
  </div>
</nav>

   </>
  )
}
