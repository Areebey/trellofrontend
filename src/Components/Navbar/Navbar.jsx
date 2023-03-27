import React from 'react'
import logo from "../../images/Trello_logo.svg.png"
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav>
        <ul>
            <img src={logo} alt="trello-logo" />
            <li><button data-bs-toggle="dropdown" aria-expanded="true"  className="dropdown-toggle" >Features
            <ul className='dropdown-menu' >
             <div className='content-container'>
              <div className='container-1' >
              <h3>Explore the features that help your team succeed</h3> 
              <div className='views'>
               <h2>Views</h2>
              </div>
              <div><h2>Automation</h2></div>
              <div><h2>Power-Ups</h2></div>
              <div><h2>Templates</h2></div>
              <div><h2>Integration</h2></div>

              </div>
              <div className='container-2'>
                <h2>Meet Trello</h2>
                </div>

             </div>
               
                {/* <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi ratione optio quod non excepturi molestiae sit a dignissimos ullam!</li> */}
            </ul>
            </button></li>
            <li><button className="dropdown-toggle">Solutions</button></li>
            <li><button className="dropdown-toggle">Plans</button></li>
            <li><button >Pricing</button></li>
            <li><button className="dropdown-toggle">Resources</button></li>
        <button className="login-btn">Login</button>
        </ul>
        <button className="get-trello-btn">Get Trello For Free</button>
    </nav>

  )
}

export default Navbar