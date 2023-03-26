import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><button data-bs-toggle="dropdown" aria-expanded="true"  className="dropdown-toggle" >Features
            <ul className='dropdown-menu' >
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi ratione optio quod non excepturi molestiae sit a dignissimos ullam!</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi ratione optio quod non excepturi molestiae sit a dignissimos ullam!</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi ratione optio quod non excepturi molestiae sit a dignissimos ullam!</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi ratione optio quod non excepturi molestiae sit a dignissimos ullam!</li>
            </ul>
            </button></li>
            <li><button className="dropdown-toggle">Solutions</button></li>
            <li><button className="dropdown-toggle">Plans</button></li>
            <li><button >Pricing</button></li>
            <li><button className="dropdown-toggle">Resources</button></li>
        </ul>
    </nav>

  )
}

export default Navbar