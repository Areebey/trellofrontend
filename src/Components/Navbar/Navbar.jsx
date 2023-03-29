import React  from 'react'
import logo from "../../images/Trello_logo.svg.png"
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav>
        <ul>
            <img src={logo} alt="trello-logo" />
            <li><button data-bs-toggle="dropdown" 
              className="dropdown-toggle" >Features
            <div className='dropdown-menu' >
             <div className='content-container'>
              <div className='sub-container-1' >
                <p>Explore the features that help your team succeed</p>
              {/* <h4>Explore the features that help your team succeed</h4>  */}

                <div className='container-1'>
              <div className='views'>
               <h4>Views</h4>
               <p>View your team's project from every angle</p>
              </div>
              <div><h2>Automation</h2></div>
              <div><h2>Power-Ups</h2></div>
              <div><h2>Templates</h2></div>
              <div><h2>Integration</h2></div>
              </div>
              </div>

              <div className='container-2'>
                <h2>Meet Trello</h2>
                </div>
             </div> 
             </div>
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