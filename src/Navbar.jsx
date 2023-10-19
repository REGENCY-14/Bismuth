import { useState, useEffect } from "react";
import {FaSearch, FaBars } from "react-icons/fa"
import { IoIosArrowForward} from "react-icons/io"

const navitems = ["Course", "About", "Financial Aid", "Corporate", "Community"]

const Dropdown = ({header}) => {
  return (
    <div className="dropdown">
      <ul className="dropdown-list">
        <li className="dropdown-item">{header}</li>
        <li className="dropdown-item">All course</li>
        <li className="dropdown-item">All course</li>
        <li className="dropdown-item">All course</li>
        <li className="dropdown-item">All course</li>
        <li className="dropdown-item">All course</li>
        <li className="dropdown-item">All course</li>
        <li className="dropdown-item">All course</li>
        <li className="dropdown-item">All course</li>
      </ul>
    </div>
  )
}

const Navbar = () => {
  const [showCountry, setShowCountry] = useState(false);
  const handleCountry = () => {
    setShowCountry(!showCountry)
  }

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  };
  mediaQuery.addEventListener("change", handleMediaQueryChange);
  return () => {
    mediaQuery.removeEventListener("change", handleMediaQueryChange);
  };
  }, []);

  const [showSidebar, setShowSidebar] = useState(false);
  const changeSidebar = () => {
      setShowSidebar(!showSidebar);
  }

  const [itemHovered, setItemHovered] = useState(-1);
  const [timeoutId, setTimeoutId] = useState(null);

  // hover if mobile, else click if not mobile screen
  const handleMouseEnter = (item) => {
    clearTimeout(timeoutId);
    if(!isMobile){setItemHovered(item);}
  };

  const handleMouseLeave = () => {
    if(!isMobile){
    const id = setTimeout(() => {
      setItemHovered(-1);
     }, 500); // adjust the delay time as needed
    setTimeoutId(id);
  }
  };

  const handleClick = (item) => {
    if(item === itemHovered){
      setItemHovered(-1);
    }else{
      setItemHovered(item);
    }
  }

  return (
    <nav className="navbar">
      <div className="logo"><img src="/logo.png"/></div>
      <div className="links">
        <ul className={`scroll ${(showSidebar) ? '' : 'hidden'}`}>
          <li className="sm-img"><img src="/logo-white.png"/></li>
          {
            navitems.map((navitem, index) => (
              <li key={index}
              className={`navbar-item ${(itemHovered === index)? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
                {navitem}
                <button onClick={() => handleClick(index)}>
                  <IoIosArrowForward size={30} className="arrow1"/>
                </button>
                {(itemHovered === index) && (<Dropdown header={navitem}/>)}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="button">
        <FaSearch className="icon"/>
        <button onClick={handleCountry}>
          <img id="kenya" src="/ke.svg"/>
          Kenya
          <div className="cover"></div>
          {showCountry &&
            <div className="country">
              <div className="item">
                <img src="/ke.svg"/>
                Kenya
              </div>
              <div className="item">
                <img src="/international.svg"/>
                International
              </div>
            </div>
          }
          
        </button>
        <FaBars id='nav_button' onClick={changeSidebar}/>
      </div>
    </nav>
  );
};

export default Navbar;
