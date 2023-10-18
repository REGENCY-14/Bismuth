import { useState } from "react";
import {FaSearch, FaBars, FaWindowClose} from "react-icons/fa"

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
  const [showSidebar, setShowSidebar] = useState(false);

    const changeSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    const [itemHovered, setItemHovered] = useState(-1);
    const [timeoutId, setTimeoutId] = useState(null);

const handleMouseEnter = (item) => {
  clearTimeout(timeoutId);
  setItemHovered(item);
};

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setItemHovered(-1);
     }, 500); // adjust the delay time as needed
    setTimeoutId(id);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src="/logo.png"/></div>
      <div className="links">
        <ul className={`${(showSidebar) ? 'show' : 'hidden'}`}>
          <li className="sm-img"><img src="/logo-white.png"/></li>
          {
            navitems.map((navitem, index) => (
              <li key={index} className="navbar-item" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                {navitem}
                {(itemHovered === index) && (<Dropdown header={navitem}/>)}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="button">
        <FaSearch className="icon"/>
        <button>Kenya</button>
        <FaBars id='nav_button' onClick={changeSidebar}/>
      </div>
    </nav>
  );
};

export default Navbar;
