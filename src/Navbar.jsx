import { useState } from "react";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

 const handleMouseEnter = () => {
   clearTimeout(timeoutId);
   setIsHovered(true);
 };

   const handleMouseLeave = () => {
     const id = setTimeout(() => {
       setIsHovered(false);
     }, 500); // adjust the delay time as needed
     setTimeoutId(id);
   };
  return (
    <nav className="navbar">
      <div className="links">
        <ul>
          <li
            className="navbar-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Courses{" "}
            {isHovered && (
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li className="dropdown-item">All course</li>
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
            )}
          </li>
          <li
            className="navbar-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
          </li>
          <li>Financial Aid</li>
          <li>Community</li>
          <button>Kenya</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
