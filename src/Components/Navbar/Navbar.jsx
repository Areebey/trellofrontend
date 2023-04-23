import React,{useState,useEffect,useRef} from 'react'
import logo from "../../images/Trello_logo.svg.png"
import {RiArrowDropDownLine} from "react-icons/ri"
import {GrView,GrTemplate,GrIntegration} from "react-icons/gr"
import {GiAutoRepair} from "react-icons/gi"
import {HiOutlinePencil} from "react-icons/hi"
import {FaBars} from "react-icons/fa";
import "./Navbar.css"


const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const dropdownRef = useRef(null);

  const toggleBtn=()=>{
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav >

        <ul>
          <img src={logo} className='trello-logo' alt="trello-logo"/>

            <li><button  className="Features" onClick={toggleBtn} >Features<RiArrowDropDownLine/>
            <div className='dropdown-menu' ref={dropdownRef}>
              {isOpen &&(

             <div className='feature-content-container'>
              <div className='sub-container-1'>
                <h2>Explore the features that help your team succeed</h2>
                <div className='feature-container-1'>
              <div className='views'>
               <h4><GrView/> Views</h4>
               <p>View your team's project from every angle.</p>
              </div>
              
              <div className='automation'>
                <h4><GiAutoRepair/>Automation</h4>
                <p>Automate tasks and workflows with Butler automation.</p>
                </div>
              <div className='power-ups'>
                <h4><HiOutlinePencil/>Power-Ups</h4>
                <p>Power up your teams by linking their favorite tools with Trello plugins.</p>
                </div>
              </div>
                <div className='container-1Sec-2'>
              <div className='templates'>
                <h4><GrTemplate/>Templates</h4>
                <p>Give your team a blueprint for success with easy-to-use 
                  templates from industry leaders and the Trello community.</p>
                </div>
              <div className='integration'>
                <h4><GrIntegration/>Integration</h4>
                <p>Find the apps your team is already using or discover 
                  new ways to get work done in Trello.</p>
                </div>
                </div>
              </div>

              <div className='feature-container-2'>
                <h3>Meet Trello</h3>
                <h4>----------------------------------------</h4>
                <div className='content-trello'>
                  <p>Trello makes it easy for your team to get work done. No matter the project, workflow, or type of team, 
                    Trello can help keep things organized. It’s simple –  sign-up, 
                    create a board, and you’re off! Productivity awaits.</p>
                </div>
                <div className='trello-btn'>
                  <span>Check out Trello</span>
                </div>
                </div>
             </div> 
             )}
             </div>
            </button></li>

            <li><button onClick={toggleBtn}>Solutions<RiArrowDropDownLine/></button></li>
            <li><button onClick={toggleBtn}>Plans<RiArrowDropDownLine/></button></li>
            <li><button >Pricing</button></li>
            <li><button onClick={toggleBtn}>Resources<RiArrowDropDownLine/></button></li>

        <button className="login-btn">Login</button>
        <button className="get-trello-btn">Get Trello For Free</button>

        <button className='btn-forresponsive'>
        <div className='navigation-div'><FaBars className='btn-navigation'/></div>
        </button>
        </ul>

    </nav>

  )
}

export default Navbar