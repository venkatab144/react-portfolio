import './Navbar.css'
import NavbarItem from './NavbarItem/NavbarItem'
import { HiMenu } from "react-icons/hi";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    function onOutsideTouchInteraction()
    {
        if (showMenu)
        {
            toggleMenu();
        }
    }

    const { height, width } = useWindowDimensions();

    return (
        <div>
            <div className={showMenu && "touch-detector"} onMouseDown={onOutsideTouchInteraction} onTouchStart={onOutsideTouchInteraction}></div>
            <div className={width > 780 ? "navbar-container" : showMenu ? "navbar-container expanded" : "navbar-container"} onClick={toggleMenu}>
                <NavbarContent />

                {showMenu && <NavbarContent smallMenu={true}/>}

                <svg width="0" height="0">
                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#0000ff" offset="0%" />
                        <stop stopColor="#ff0000" offset="100%" />
                    </linearGradient>
                </svg>
                <HiMenu className="burger" style={{ fill: "url(#blue-gradient)" }}/>
            </div>
        </div>
    )
}

function NavbarContent({ smallMenu }) {
    return (
      <div className={smallMenu ? "navbar-content-container-burger" : "navbar-content-container"}>
        <NavbarItem smallMenu={smallMenu} text={"HOME"} linkId={"header-link"}/>
        <NavbarItem smallMenu={smallMenu} text={"ABOUT ME"} linkId={"about-link"}/>
        <NavbarItem smallMenu={smallMenu} text={"PROFESSIONAL EXPERIENCE"} linkId={"prof-exp-link"}/>
        <NavbarItem smallMenu={smallMenu} text={"ACADEMIC EXPERIENCE"} linkId={"academic-exp-link"}/>
        <NavbarItem smallMenu={smallMenu} text={"PROJECTS"} linkId={"projects-link"}/>
      </div>
    );
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }

export default Navbar
