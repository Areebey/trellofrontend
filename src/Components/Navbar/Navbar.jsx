import React,{useState,useEffect,useRef} from 'react'
import logo from "../../images/Trello_logo.svg.png"
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
    <nav>
        <ul>
          <li>
           <img src={logo} alt="trello-logo" /></li>
            <li><button  className="Features" onClick={toggleBtn} >Features
            <div className='dropdown-menu' ref={dropdownRef} >
              {isOpen &&(
             <div className='content-container'>
              <div className='sub-container-1' >
                <h2>Explore the features that help your team succeed</h2>
                <div className='container-1'>
              <div className='views'>
               <h4>Views</h4>
               <p>View your team's project from every angle.</p>
              </div>
              
              <div className='automation'>
                <h4>Automation</h4>
                <p>Automate tasks and workflows with Butler automation.</p>
                </div>
              <div className='power-ups'>
                <h4>Power-Ups</h4>
                <p>Power up your teams by linking their favorite tools with Trello plugins.</p>
                </div>
                <div className='container-1Sec-2'>
              <div className='templates'>
                <h4>Templates</h4>
                <p>Give your team a blueprint for success with easy-to-use 
                  templates from industry leaders and the Trello community.</p>
                </div>
              <div className='integration'>
                <h4>Integration</h4>
                <p>Find the apps your team is already using or discover 
                  new ways to get work done in Trello.</p>
                </div>
                </div>
              </div>
              </div>

              <div className='container-2'>
                {/* <div className='meet-trello'> */}
                <h3>Meet Trello</h3>
                {/* </div> */}
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

            <li><button>Solutions</button></li>
            <li><button>Plans</button></li>
            <li><button >Pricing</button></li>
            <li><button>Resources</button></li>

        <button className="login-btn">Login</button>
        <button className="get-trello-btn">Get Trello For Free</button>
        </ul>
    </nav>

  )
}

export default Navbar